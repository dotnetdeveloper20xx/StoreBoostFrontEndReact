import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-900'>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className='flex-1 container mx-auto px-4 py-6'>
        <Outlet />
      </main>

      {/* Optional Footer */}
      {/* <footer className="text-center text-sm py-4 text-gray-400">
        &copy; 2025 StoreBoost. All rights reserved.
      </footer> */}
    </div>
  );
}
