import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/Button";

export default function Navbar() {
  return (
    <nav className='border-b bg-white shadow-sm sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center'>
        {/* Brand Logo */}
        <Link to='/' className='text-xl font-bold tracking-tight text-gray-900'>
          StoreBoost
        </Link>

        {/* Nav Links */}
        <div className='flex gap-2'>
          <Button asChild variant='ghost'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </Button>

          <Button asChild variant='ghost'>
            <NavLink
              to='/slots'
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Book Slot
            </NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}
