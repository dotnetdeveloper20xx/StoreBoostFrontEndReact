// src/features/slots/components/SlotCard.tsx

import { Button } from "@/components/ui/Button";
import type { Slot } from "@/features/slots/api/slotApi";

interface Props {
  slot: Slot;
}

export default function SlotCard({ slot }: Props) {
  const time = new Date(slot.startTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Date(slot.startTime).toLocaleDateString();

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

      {/* Optional: Action button (disabled if fully booked) */}
      <Button disabled={slot.isBooked} className='mt-2'>
        {slot.isBooked ? "Unavailable" : "Book Slot"}
      </Button>
    </div>
  );
}
