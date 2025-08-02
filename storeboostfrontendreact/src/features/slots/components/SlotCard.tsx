// src/components/SlotCard.tsx
// UI + action logic for a single appointment slot, with full toast notifications.

import React, { useState } from "react";
import { bookSlot, cancelBooking } from "../api/slots";
import { toast } from "react-toastify";

interface Slot {
  id: string;
  startTime: string;
  maxBookings: number;
  currentBookings: number;
  isBooked: boolean;
}

interface SlotCardProps {
  slot: Slot;
  onAction?: () => void;
}

const SlotCard: React.FC<SlotCardProps> = ({ slot, onAction }) => {
  const [loading, setLoading] = useState(false);

  const handleBook = async () => {
    setLoading(true);
    try {
      const res = await bookSlot(slot.id);
      if (res.data?.success) {
        toast.success(res.data.message || "✅ Slot booked successfully");
        onAction?.();
      } else {
        toast.error(res.data?.message || "❌ Failed to book slot");
      }
    } catch (err) {
      toast.error("❌ Error while booking slot");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    setLoading(true);
    try {
      const res = await cancelBooking(slot.id);
      if (res.data?.success) {
        toast.success(res.data.message || "✅ Booking cancelled");
        onAction?.();
      } else {
        toast.error(res.data?.message || "❌ Failed to cancel booking");
      }
    } catch (err) {
      toast.error("❌ Error while cancelling booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='border p-4 rounded shadow-sm flex justify-between items-center'>
      <div>
        <p className='text-lg font-medium'>
          {new Date(slot.startTime).toLocaleString()}
        </p>
        <p className='text-sm text-gray-600'>
          Bookings: {slot.currentBookings} / {slot.maxBookings}
        </p>
      </div>

      <div>
        {slot.isBooked ? (
          <button
            onClick={handleCancel}
            className='bg-red-500 text-white px-3 py-1 rounded'
            disabled={loading}
          >
            {loading ? "Cancelling..." : "Cancel"}
          </button>
        ) : (
          <button
            onClick={handleBook}
            className='bg-green-600 text-white px-3 py-1 rounded'
            disabled={loading}
          >
            {loading ? "Booking..." : "Book"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SlotCard;
