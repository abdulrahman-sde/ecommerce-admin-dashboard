import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <Link to="/dashboard" className="text-xl font-bold">
            Admin Dashboard
          </Link>
          <Link to="/dashboard/orders">Orders</Link>
          <Link to="/dashboard/customers" className="ml-4">
            Customers
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
}
