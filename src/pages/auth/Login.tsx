import { useGetProductsQuery } from "@/lib/store/services/products/productsApi";

export default function Login() {
  const { data, isLoading, error } = useGetProductsQuery({});
  console.log(isLoading);
  console.log(error?.data);
  console.log(data?.data);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <p className="text-sm text-gray-600 mb-6">
          This is a placeholder login screen.
        </p>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={() => {
            localStorage.setItem("auth", "1");
            window.location.href = "/dashboard";
          }}
        >
          Sign in (demo)
        </button>
      </div>
    </div>
  );
}
