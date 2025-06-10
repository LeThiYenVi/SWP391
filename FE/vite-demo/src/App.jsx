import "./App.css";
import "./healthcare-theme.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Import Admin Components
import AdminLayout from "./components/admin/admin-layout";
import AdminDashboard from "./pages/admin/dashboard/admin-dashboard";
import UserManagement from "./pages/admin/users/user-management";
import BookingManagement from "./pages/admin/bookings/booking-management";
import Reports from "./pages/admin/reports/reports";
import Settings from "./pages/admin/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    // Admin Routes
    {
      path: "/admin",
      element: <Navigate to="/admin/dashboard" replace />,
    },
    {
      path: "/admin/dashboard",
      element: (
        <AdminLayout>
          <AdminDashboard />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/users",
      element: (
        <AdminLayout>
          <UserManagement />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/bookings",
      element: (
        <AdminLayout>
          <BookingManagement />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/reports",
      element: (
        <AdminLayout>
          <Reports />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/settings",
      element: (
        <AdminLayout>
          <Settings />
        </AdminLayout>
      ),
    },
    // Add placeholder routes for future admin pages
    {
      path: "/admin/consultants",
      element: (
        <AdminLayout>
          <div className="coming-soon">
            <h1>👨‍⚕️ Quản lý bác sĩ</h1>
            <p>Tính năng đang được phát triển...</p>
            <div className="coming-soon-icon">🚧</div>
          </div>
        </AdminLayout>
      ),
    },
    {
      path: "/admin/consultations",
      element: (
        <AdminLayout>
          <div className="coming-soon">
            <h1>💬 Quản lý tư vấn</h1>
            <p>Tính năng đang được phát triển...</p>
            <div className="coming-soon-icon">🚧</div>
          </div>
        </AdminLayout>
      ),
    },
    {
      path: "/admin/payments",
      element: (
        <AdminLayout>
          <div className="coming-soon">
            <h1>💳 Quản lý thanh toán</h1>
            <p>Tính năng đang được phát triển...</p>
            <div className="coming-soon-icon">🚧</div>
          </div>
        </AdminLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
