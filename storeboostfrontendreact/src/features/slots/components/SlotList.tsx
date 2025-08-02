// src/features/SlotBooking/SlotList.tsx
// Displays the list of all slots, with refresh-on-book/cancel support.

import React, { useEffect, useState } from "react";
import { fetchAllSlots } from "../api/slots";
import SlotCard from "@/components/slots/components/SlotCard";



interface Slot {
  id: string;
  startTime: string;
  maxBookings: number;
  currentBookings: number;
  isBooked: boolean;
}

const SlotList: React.FC = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Refetch logic
  const loadSlots = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchAllSlots();
      setSlots(res.data.data);
    } catch (err) {
      console.error("Error fetching slots:", err);
      setError("Failed to load slots.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSlots();
  }, []);

  if (loading) return <p className='text-gray-500'>Loading slots...</p>;
  if (error) return <p className='text-red-500'>{error}</p>;

  return (
    <div className='space-y-4'>
      {slots.map((slot) => (
        <SlotCard key={slot.id} slot={slot} onAction={loadSlots} />
      ))}
    </div>
  );
};

export default SlotList;
