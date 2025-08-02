import { Outlet } from "react-router-dom"
import Topbar from "@/components/Topbar"

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Top Bar */}
      <Topbar />

      {/* Main Content */}
      <main className="flex-1 w-full px-6 py-10 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
