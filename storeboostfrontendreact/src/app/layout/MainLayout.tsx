import { Outlet } from "react-router-dom";
import Topbar from "@/components/Topbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-900'>
      {/* Top Bar */}
      <Topbar />

      {/* 🔔 TEMP: Test Toast Button (you can remove this later) */}
      <div className='px-6 pt-4 max-w-7xl mx-auto'>
        <button
          onClick={() => toast.success("✅ Toast is working!")}
          className='bg-red-700 text-white text-sm font-bold px-4 py-2 rounded hover:bg-black transition'
        >
          TEST TOAST
        </button>
      </div>

      {/* Main Content */}
      <main className='flex-1 w-full px-6 py-10 max-w-7xl mx-auto'>
        <Outlet />
      </main>

      {/* Toast Container */}
      <ToastContainer
        position='top-right'
        autoClose={3000}
        pauseOnHover
        draggable
        theme='light'
        toastClassName='z-[99999]'
      />
    </div>
  );
}
