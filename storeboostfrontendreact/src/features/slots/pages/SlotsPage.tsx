import SlotCard from "@/components/slots/components/SlotCard";
import { useGetAvailableSlotsQuery } from "../api/slotApi";

export default function SlotsPage() {
  const {
    data,
    isLoading,
    isError,
    refetch, // ✅ <- this is what we'll use
  } = useGetAvailableSlotsQuery();

  // Extract the slots array safely
  const slots = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : [];

  if (isLoading) {
    return <p className='text-center mt-10'>Loading slots...</p>;
  }

  if (isError) {
    return (
      <p className='text-center text-red-500 mt-10'>Failed to load slots.</p>
    );
  }

  if (slots.length === 0) {
    return <p className='text-center mt-10'>No available slots.</p>;
  }

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-6'>Available Slots</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {slots.map((slot) => (
          <SlotCard key={slot.id} slot={slot} onAction={refetch} />
        ))}
      </div>
    </section>
  );
}
