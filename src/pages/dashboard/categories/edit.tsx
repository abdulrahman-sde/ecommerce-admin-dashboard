"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import AddProductDialog from "@/components/dashboard/categories/AddProductDialog";
import { MoreVertical, Edit, Trash2, Plus } from "lucide-react";
import type { CategoryProduct, EditCategoryProps } from "@/types";

export default function EditCategory({ initialData }: EditCategoryProps) {
  const isEditMode = !!initialData?.id;

  const [categoryName, setCategoryName] = useState(initialData?.name || "");
  const [isVisible, setIsVisible] = useState(initialData?.isVisible ?? true);
  const [categoryImage, setCategoryImage] = useState<string>(
    initialData?.image || ""
  );
  const [products, setProducts] = useState<CategoryProduct[]>(
    initialData?.products || []
  );
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    if (initialData) {
      setCategoryName(initialData.name);
      setIsVisible(initialData.isVisible);
      setCategoryImage(initialData.image);
      setProducts(initialData.products);
    }
  }, [initialData]);

  const handleAddProduct = (product: { name: string; image: string }) => {
    const newProduct: CategoryProduct = {
      id: products.length + 1,
      name: product.name,
      image: product.image,
    };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCategoryImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCategoryImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const categoryData = {
      id: initialData?.id,
      name: categoryName,
      image: categoryImage,
      isVisible,
      products,
    };
    console.log(
      isEditMode ? "Updating category:" : "Creating category:",
      categoryData
    );
    // TODO: API call to save/update category
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#111827]">
          {isEditMode ? categoryName || "Edit Category" : "Create Category"}
        </h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-[#E5E7EB] text-[#374151]">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Products List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111827]">
                Products{" "}
                <span className="text-[#6B7280] font-normal">
                  {products.length}
                </span>
              </h2>
            </div>

            <div className="space-y-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                    selectedProduct === product.id
                      ? "border-[#4EA674] bg-[#4EA674]/5"
                      : "border-[#E5E7EB] hover:border-[#4EA674]/50"
                  }`}
                >
                  <button className="text-[#6B7280] hover:text-[#111827]">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                  <div className="h-12 w-12 rounded bg-[#F3F4F6] flex items-center justify-center overflow-hidden shrink-0">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl">👕</span>
                    )}
                  </div>
                  <span className="flex-1 text-sm text-[#111827]">
                    {product.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors">
                      <Edit className="h-4 w-4 text-[#6B7280]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProduct(product.id);
                      }}
                      className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors"
                    >
                      <Trash2 className="h-4 w-4 text-[#6B7280]" />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setShowAddDialog(true)}
                className="w-full py-3 border-2 border-dashed border-[#E5E7EB] rounded-lg text-[#4EA674] hover:border-[#4EA674] hover:bg-[#4EA674]/5 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" />
                ADD Product
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Category Info */}
        <div className="space-y-6">
          {/* Category Visibility */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <h3 className="font-semibold text-[#111827] mb-4">
              Category Visibility
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Visible on site</span>
              <Switch checked={isVisible} onCheckedChange={setIsVisible} />
            </div>
          </div>

          {/* Category Info */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <h3 className="font-semibold text-[#111827] mb-4">Category Info</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="categoryName">Category Name</Label>
                <Input
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="border-[#E5E7EB]"
                />
              </div>

              <div className="space-y-2">
                <Label>Image</Label>
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center hover:border-[#4EA674] transition-colors cursor-pointer"
                >
                  {categoryImage ? (
                    <img
                      src={categoryImage}
                      alt="Category"
                      className="max-h-32 mx-auto rounded"
                    />
                  ) : (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="categoryImageUpload"
                      />
                      <label
                        htmlFor="categoryImageUpload"
                        className="cursor-pointer text-[#4EA674] font-medium"
                      >
                        Add File
                      </label>
                      <p className="text-sm text-[#6B7280] mt-2">
                        Or drag and drop files
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Dialog */}
      <AddProductDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAdd={handleAddProduct}
      />
    </div>
  );
}
