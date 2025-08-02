// src/features/slots/components/SlotCard.tsx

import { Button } from "@/components/ui/Button";
import type { Slot } from "@/features/slots/api/slotApi";
import {
  useBookSlotMutation,
  useCancelSlotMutation,
} from "@/features/slots/api/slotApi";
import { toast } from "react-toastify";

interface Props {
  slot: Slot;
  onAction?: () => void; // to trigger refetch after book/cancel
}

export default function SlotCard({ slot, onAction }: Props) {
  const [bookSlot, { isLoading: booking }] = useBookSlotMutation();
  const [cancelSlot, { isLoading: cancelling }] = useCancelSlotMutation();

  const time = new Date(slot.startTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Date(slot.startTime).toLocaleDateString();

  const handleBook = async () => {
    try {
      const res = await bookSlot(slot.id).unwrap();
      toast.success(res.message || "✅ Slot booked");
      onAction?.(); // refresh list
    } catch (err) {
      toast.error("❌ Failed to book slot");
    }
  };

  const handleCancel = async () => {
    try {
      const res = await cancelSlot(slot.id).unwrap();
      toast.success(res.message || "✅ Booking cancelled");
      onAction?.();
    } catch (err) {
      toast.error("❌ Failed to cancel booking");
    }
  };

  return (
    <div className='border rounded p-4 shadow-sm bg-white flex flex-col gap-2'>
      <div>
        <p className='text-sm text-muted-foreground'>{date}</p>
        <p className='text-lg font-semibold'>{time}</p>
      </div>
      <p className='text-sm'>
        <strong>Bookings:</strong> {slot.currentBookings} / {slot.maxBookings}
      </p>
      <p
        className={`text-sm font-medium ${
          slot.isBooked ? "text-red-500" : "text-green-600"
        }`}
      >
        {slot.isBooked ? "Fully Booked" : "Available"}
      </p>

      {/* Book or Cancel Button */}
      {slot.isBooked ? (
        <Button
          onClick={handleCancel}
          disabled={cancelling}
          variant='destructive'
          className='mt-2'
        >
          {cancelling ? "Cancelling..." : "Cancel Booking"}
        </Button>
      ) : (
        <Button onClick={handleBook} disabled={booking} className='mt-2'>
          {booking ? "Booking..." : "Book Slot"}
        </Button>
      )}
    </div>
  );
}
