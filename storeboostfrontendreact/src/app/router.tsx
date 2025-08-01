// src/app/router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "@/pages/HomePage";
import SlotsPage from "@/features/slots/pages/SlotsPage";
// import SlotBookingPage from "@/features/slots/pages/SlotBookingPage" // Optional
// import NotFound from "@/pages/NotFound" // Optional

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "slots", element: <SlotsPage /> },
      // { path: "book/:id", element: <SlotBookingPage /> },
      // { path: "*", element: <NotFound /> }, // catch-all fallback (optional)
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
