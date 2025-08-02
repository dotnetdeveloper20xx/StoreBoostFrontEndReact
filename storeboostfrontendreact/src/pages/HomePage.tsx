import SlotList from "@/features/slots/components/SlotList";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <section className='flex flex-col items-center text-center px-4 py-20 w-full max-w-3xl mx-auto'>
      <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-gray-900'>
        Welcome to StoreBoost
      </h1>
      <p className='text-lg sm:text-xl text-gray-600 mb-8'>
        Book your appointments quickly and easily.
      </p>

      <Link
        to='/slots'
        className='inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition mb-12'
      >
        Get Started
      </Link>

      <div className='w-full'>
        <h2 className='text-2xl font-semibold mb-4 text-left'>
          Available Slots
        </h2>
        <SlotList />
      </div>
    </section>
  );
}
