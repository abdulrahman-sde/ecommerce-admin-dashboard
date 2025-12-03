import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Layout from "./components/dashboard/Layout.tsx";
import Login from "./pages/auth/Login.tsx";
import DashboardHome from "./pages/dashboard/Home.tsx";
import Users from "./pages/dashboard/Customers.tsx";
import Settings from "./pages/dashboard/Orders.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "customers", element: <Users /> },
      { path: "orders", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
