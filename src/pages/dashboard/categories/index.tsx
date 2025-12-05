"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/dashboard/categories/CategoryCard";
import ProductsTable from "@/components/dashboard/categories/ProductsTable";
import { categoriesData, productsListData } from "@/constants/constants";
import { ChevronRight, Plus, MoreVertical } from "lucide-react";

export default function Categories() {
  const [visibleCategories, setVisibleCategories] = useState(8);

  const handleLoadMore = () => {
    setVisibleCategories((prev) => prev + 4);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-[#111827]">Discover</h2>
          <button className="h-8 w-8 rounded-full border border-[#E5E7EB] hover:border-[#4EA674] flex items-center justify-center hover:bg-[#4EA674]/5 transition-colors">
            <ChevronRight className="h-4 w-4 text-[#6B7280]" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
          <Button variant="outline" className="border-[#E5E7EB] text-[#374151]">
            More Action
            <MoreVertical className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoriesData.slice(0, visibleCategories).map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCategories < categoriesData.length && (
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            className="border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB]"
          >
            Load More Categories
          </Button>
        </div>
      )}

      {/* Products Table Section */}
      <div className="mt-12">
        <ProductsTable products={productsListData} />
      </div>
    </div>
  );
}
