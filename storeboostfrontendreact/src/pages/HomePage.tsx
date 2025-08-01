
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className='text-center py-20 px-4'>
      <h1 className='text-4xl font-bold mb-4 text-gray-900'>
        Welcome to StoreBoost
      </h1>
      <p className='text-lg text-gray-600 mb-8'>
        Book your appointments quickly and easily.
      </p>

      <Link
  to="/slots"
  className="inline-block px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
>
  Get Started
</Link>
    </section>
  );
}
