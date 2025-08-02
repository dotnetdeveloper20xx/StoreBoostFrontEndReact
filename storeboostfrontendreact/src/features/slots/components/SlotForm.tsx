// src/features/SlotBooking/SlotForm.tsx
// Form for creating a new appointment slot, with full toast notifications.

import React, { useState } from "react";
import { createSlot } from "../api/slots";
import { toast } from "react-toastify";

const SlotForm: React.FC = () => {
  const [startTime, setStartTime] = useState("");
  const [maxBookings, setMaxBookings] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!startTime || maxBookings < 1) {
      toast.error("❌ Please provide valid input.");
      return;
    }

    setLoading(true);

    try {
      const res = await createSlot({ startTime, maxBookings });

      if (res.data?.success) {
        toast.success(res.data.message || "✅ Slot created successfully!");
        setStartTime("");
        setMaxBookings(1);
      } else {
        toast.error(res.data?.message || "❌ Failed to create slot.");
      }
    } catch (err: any) {
      console.error("Failed to create slot:", err);
      toast.error("❌ Error while creating slot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4'
    >
      <h2 className='text-xl font-semibold'>Create New Slot</h2>

      <div>
        <label className='block text-sm font-medium'>Start Time (UTC)</label>
        <input
          type='datetime-local'
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className='w-full mt-1 p-2 border rounded'
          required
        />
      </div>

      <div>
        <label className='block text-sm font-medium'>Max Bookings</label>
        <input
          type='number'
          min='1'
          value={maxBookings}
          onChange={(e) => setMaxBookings(Number(e.target.value))}
          className='w-full mt-1 p-2 border rounded'
          required
        />
      </div>

      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Slot"}
      </button>
    </form>
  );
};

export default SlotForm;
