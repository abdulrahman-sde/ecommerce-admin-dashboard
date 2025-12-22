import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/dashboard/categories/CategoryCard";
import ProductsTable from "@/components/dashboard/categories/ProductsTable";
import { Plus, MoreVertical } from "lucide-react";
import { useCategory } from "@/hooks/useCategory";
import { Suspense } from "react";
import { ProductTableSkeleton } from "@/components/shared/ProductTableSkeleton";

export default function Categories() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useCategory();
  console.log(data);
  return (
    <div className="space-y-8 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-[#111827]">Discover</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Button
            className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white"
            onClick={() => navigate("/dashboard/categories/add")}
          >
            <Plus className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Add Category</span>
          </Button>
          <Button variant="outline" className="border-[#E5E7EB] text-[#374151]">
            <span className="hidden sm:inline">More Action</span>
            <MoreVertical className="h-4 w-4 sm:ml-2" />
          </Button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Products Table Section */}
      <div className="mt-12">
        <ProductsTable />
      </div>
    </div>
  );
}
