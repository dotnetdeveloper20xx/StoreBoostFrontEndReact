import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-50 p-10 space-y-6'>
        {/* 🚨 TEST TOAST BUTTON IN CENTER OF PAGE */}
        <button
          onClick={() => toast.success("✅ Toast is working!")}
          className='bg-red-700 text-white text-xl font-bold px-6 py-4 rounded shadow-lg hover:bg-black transition'
        >
          🔔 CLICK TO TEST TOAST
        </button>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>

      {/* Toast container */}
      <ToastContainer
        position='top-right'
        autoClose={3000}
        theme='light'
        toastClassName='z-[99999]'
      />
    </Router>
  );
}

export default App;
