import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className='hidden md:block w-60 bg-gray-100 border-r px-4 py-6'>
        <nav className='flex flex-col gap-4'>
          <SidebarLink to='/' label='Home' />
          <SidebarLink to='/slots' label='Book Slot' />
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden'
          onClick={onClose}
        >
          <aside
            className='absolute left-0 top-0 h-full w-60 bg-white shadow-md p-6'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='mb-6 text-sm text-gray-500 hover:text-gray-700'
              onClick={onClose}
            >
              Close ✕
            </button>
            <nav className='flex flex-col gap-4'>
              <SidebarLink to='/' label='Home' />
              <SidebarLink to='/slots' label='Book Slot' />
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

function SidebarLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium hover:text-blue-600 ${
          isActive ? "text-blue-600" : "text-gray-800"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
