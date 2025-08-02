import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header className='w-full bg-gray-100 shadow-sm border-b'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-gray-800 text-lg'>
        {/* Left: Logo */}
        <div className='text-2xl font-extrabold text-blue-600 tracking-tight'>
          <Link to='/'>StoreBoost</Link>
        </div>

        {/* Center: Navigation links */}
        <nav className='flex gap-10'>
          <Link
            to='/slots'
            className='hover:text-blue-600 transition font-medium'
          >
            Slots
          </Link>
          <Link
            to='/user'
            className='hover:text-blue-600 transition font-medium'
          >
            User
          </Link>
          <Link
            to='/admin'
            className='hover:text-blue-600 transition font-medium'
          >
            Admin
          </Link>
        </nav>

        {/* Right: Auth Links */}
        <div className='flex gap-6'>
          <Link
            to='/login'
            className='hover:text-blue-600 transition font-medium'
          >
            Login
          </Link>
          <Link
            to='/register'
            className='hover:text-blue-600 transition font-medium'
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
