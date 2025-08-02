// src/hooks/useSlots.ts
// Custom React hook to fetch and expose all appointment slots.

import { fetchAllSlots } from "@/features/slots/api/slots";
import { useEffect, useState } from "react";


// Define the expected slot shape (should match backend response)
interface Slot {
  id: string;
  startTime: string;
  maxBookings: number;
  currentBookings: number;
  isBooked: boolean;
}

/**
 * Custom hook to fetch and manage all appointment slots.
 * @returns { slots, loading, error }
 */
export const useSlots = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllSlots()
      .then((res) => {
        setSlots(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to fetch slots:", err);
        setError("Failed to load slots");
      })
      .finally(() => setLoading(false));
  }, []);

  return { slots, loading, error };
};
