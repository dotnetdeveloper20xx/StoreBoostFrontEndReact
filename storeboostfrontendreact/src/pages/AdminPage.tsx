import SlotForm from "../features/SlotBooking/SlotForm";

export default function AdminPage() {
  return (
    <section className='flex flex-col items-center text-center px-4 py-20 w-full max-w-2xl mx-auto'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-gray-900'>
        Admin Panel
      </h1>
      <p className='text-lg text-gray-600 mb-8'>
        Use the form below to create new appointment slots.
      </p>

      <SlotForm />
    </section>
  );
}
