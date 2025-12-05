import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Search, Save, Plus, Edit, Wand2, X } from "lucide-react";

export default function AddProducts() {
  const [productName, setProductName] = useState("iPhone 15");
  const [productDescription, setProductDescription] = useState(
    "The iPhone 15 delivers cutting-edge performance with the A16 Bionic chip, an immersive Super Retina XDR display, advanced dual-camera system, and exceptional battery life, all encased in stunning aerospace-grade aluminum."
  );
  const [productPrice, setProductPrice] = useState("999.89");
  const [discountedPrice, setDiscountedPrice] = useState("99");
  const [salePrice] = useState("900.89");
  const [stockQuantity, setStockQuantity] = useState("Unlimited");
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [isFeatured, setIsFeatured] = useState(true);
  const [taxIncluded, setTaxIncluded] = useState(true);
  const [mainImage] = useState("📱");
  const [additionalImages] = useState(["📱", "📱"]);

  const colors = [
    { name: "Green", color: "#D4E8D4" },
    { name: "Pink", color: "#F5D4D4" },
    { name: "Gray", color: "#D4D8DD" },
    { name: "Yellow", color: "#F5EDD4" },
    { name: "Black", color: "#3F3F3F" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#111827]">
          Add New Product
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
            <Input
              placeholder="Search product for add"
              className="pl-10 w-64 border-[#E5E7EB] text-sm"
            />
          </div>
          <Button className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white">
            Publish Product
          </Button>
          <Button variant="outline" className="border-[#E5E7EB]">
            <Save className="h-4 w-4 mr-2" />
            Save to draft
          </Button>
          <Button variant="outline" size="icon" className="border-[#E5E7EB]">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Details */}
          <Card className="p-6 border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827] mb-6">
              Basic Details
            </h2>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="productName"
                  className="text-sm text-[#374151] mb-2 block"
                >
                  Product Name
                </Label>
                <Input
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border-[#E5E7EB] bg-[#F9FAFB]"
                />
              </div>

              <div>
                <Label
                  htmlFor="productDescription"
                  className="text-sm text-[#374151] mb-2 block"
                >
                  Product Description
                </Label>
                <div className="relative">
                  <Textarea
                    id="productDescription"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="border-[#E5E7EB] bg-[#F9FAFB] min-h-[100px] text-blue-600 underline"
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                      <Edit className="h-4 w-4 text-[#6B7280]" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                      <Wand2 className="h-4 w-4 text-[#6B7280]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6 border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827] mb-6">
              Pricing
            </h2>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="productPrice"
                  className="text-sm text-[#374151] mb-2 block"
                >
                  Product Price
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
                    $
                  </span>
                  <Input
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="pl-7 border-[#E5E7EB] bg-[#F9FAFB]"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="USD"
                      className="h-4 w-6"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="discountedPrice"
                    className="text-sm text-[#6B7280] mb-2 block"
                  >
                    Discounted Price{" "}
                    <span className="text-[#9CA3AF]">(Optional)</span>
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
                      $
                    </span>
                    <Input
                      id="discountedPrice"
                      value={discountedPrice}
                      onChange={(e) => setDiscountedPrice(e.target.value)}
                      className="pl-7 border-[#E5E7EB] bg-[#F9FAFB]"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-[#374151] mb-2 block">
                    Tax Included
                  </Label>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="taxYes"
                        checked={taxIncluded}
                        onChange={() => setTaxIncluded(true)}
                        className="h-4 w-4 text-[#4EA674]"
                      />
                      <Label
                        htmlFor="taxYes"
                        className="text-sm text-[#374151] font-normal"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="taxNo"
                        checked={!taxIncluded}
                        onChange={() => setTaxIncluded(false)}
                        className="h-4 w-4"
                      />
                      <Label
                        htmlFor="taxNo"
                        className="text-sm text-[#374151] font-normal"
                      >
                        No
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-3">
                <span className="text-sm text-[#6B7280]">Sale=</span>
                <span className="text-sm font-semibold text-[#111827] ml-1">
                  ${salePrice}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="expirationStart"
                    className="text-sm text-[#374151] mb-2 block"
                  >
                    Expiration
                  </Label>
                  <Input
                    id="expirationStart"
                    type="date"
                    placeholder="Start"
                    className="border-[#E5E7EB] bg-[#F9FAFB]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="expirationEnd"
                    className="text-sm text-[#374151] mb-2 block invisible"
                  >
                    End
                  </Label>
                  <Input
                    id="expirationEnd"
                    type="date"
                    placeholder="End"
                    className="border-[#E5E7EB] bg-[#F9FAFB]"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Inventory */}
          <Card className="p-6 border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827] mb-6">
              Inventory
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="stockQuantity"
                    className="text-sm text-[#374151] mb-2 block"
                  >
                    Stock Quantity
                  </Label>
                  <Input
                    id="stockQuantity"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(e.target.value)}
                    disabled={isUnlimited}
                    className="border-[#E5E7EB] bg-[#F9FAFB]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="stockStatus"
                    className="text-sm text-[#374151] mb-2 block"
                  >
                    Stock Status
                  </Label>
                  <Select defaultValue="in-stock">
                    <SelectTrigger className="border-[#E5E7EB] bg-[#F9FAFB]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                      <SelectItem value="low-stock">Low Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="unlimited"
                  checked={isUnlimited}
                  onCheckedChange={(checked) =>
                    setIsUnlimited(checked as boolean)
                  }
                  className="data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                />
                <Label
                  htmlFor="unlimited"
                  className="text-sm text-[#374151] font-normal"
                >
                  Unlimited
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={isFeatured}
                  onCheckedChange={(checked) =>
                    setIsFeatured(checked as boolean)
                  }
                  className="data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                />
                <Label
                  htmlFor="featured"
                  className="text-sm text-[#374151] font-normal"
                >
                  Highlight this product in a featured section.
                </Label>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="outline" className="border-[#E5E7EB]">
                <Save className="h-4 w-4 mr-2" />
                Save to draft
              </Button>
              <Button className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white">
                Publish Product
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Upload Product Image */}
          <Card className="p-6 border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827] mb-6">
              Upload Product Image
            </h2>

            <div className="space-y-4">
              <div>
                <Label className="text-sm text-[#374151] mb-2 block">
                  Product Image
                </Label>
                <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-6 text-center bg-[#F9FAFB]">
                  <div className="flex justify-center mb-3">
                    <div className="h-32 w-24 bg-white rounded-lg shadow-md flex items-center justify-center text-6xl">
                      {mainImage}
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#E5E7EB]"
                    >
                      <Search className="h-3 w-3 mr-2" />
                      Browse
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#E5E7EB]"
                    >
                      <X className="h-3 w-3 mr-2" />
                      Replace
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {additionalImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative border-2 border-[#E5E7EB] rounded-lg p-3 bg-white flex items-center justify-center text-3xl h-20 w-20"
                  >
                    {img}
                    <button className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                <button className="border-2 border-dashed border-[#E5E7EB] rounded-lg h-20 w-20 flex items-center justify-center hover:bg-[#F9FAFB]">
                  <div className="text-center">
                    <Plus className="h-5 w-5 text-[#4EA674] mx-auto mb-1" />
                    <span className="text-xs text-[#4EA674]">Add Image</span>
                  </div>
                </button>
              </div>
            </div>
          </Card>

          {/* Categories */}
          <Card className="p-6 border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827] mb-6">
              Categories
            </h2>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="productCategories"
                  className="text-sm text-[#374151] mb-2 block"
                >
                  Product Categories
                </Label>
                <Select>
                  <SelectTrigger className="border-[#E5E7EB] bg-[#F9FAFB]">
                    <SelectValue placeholder="Select your product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="productTag"
                  className="text-sm text-[#374151] mb-2 block"
                >
                  Product Tag
                </Label>
                <Select>
                  <SelectTrigger className="border-[#E5E7EB] bg-[#F9FAFB]">
                    <SelectValue placeholder="Select your product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Arrival</SelectItem>
                    <SelectItem value="sale">On Sale</SelectItem>
                    <SelectItem value="featured">Featured</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm text-[#374151] mb-3 block">
                  Select your color
                </Label>
                <div className="flex gap-2">
                  {colors.map((colorItem, idx) => (
                    <button
                      key={idx}
                      className="h-10 w-10 rounded-lg border-2 border-[#E5E7EB] hover:border-[#4EA674]"
                      style={{ backgroundColor: colorItem.color }}
                      title={colorItem.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
