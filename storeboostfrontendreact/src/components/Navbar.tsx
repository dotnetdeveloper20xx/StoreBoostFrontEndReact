import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";


export default function Navbar() {
  return (
    <header className='border-b bg-white shadow-sm'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo/Brand */}
        <Link to='/' className='text-xl font-bold tracking-tight text-primary'>
          StoreBoost
        </Link>

        {/* Navigation */}
        <nav className='flex gap-3'>
          <Button asChild variant='ghost'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : ""
              }
            >
              Home
            </NavLink>
          </Button>
          <Button asChild variant='ghost'>
            <NavLink
              to='/slots'
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : ""
              }
            >
              Book Slot
            </NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
}
