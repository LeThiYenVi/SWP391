import "./App.css";
import "./healthcare-theme.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
