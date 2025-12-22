import { useAddProduct } from "@/hooks/products/useAddProduct";
import { useCategory } from "@/hooks/useCategory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarIcon,
  Search,
  Plus,
  Save,
  Image as ImageIcon,
  X,
  RotateCw,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useRef } from "react";

export default function AddProductsPage() {
  const {
    form,
    onSubmit,
    imagePreviews,
    onImageUpload,
    onReplaceImage,
    removeImage,
  } = useAddProduct();
  const { data: categories } = useCategory();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const triggerReplaceInput = () => {
    replaceInputRef.current?.click();
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-8">
      <Form {...form}>
        <form onSubmit={onSubmit}>
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <h1 className="text-2xl font-semibold text-[#111827]">
              Add New Product
            </h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search product for add"
                  className="pl-9 w-full sm:w-[300px]"
                />
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                <Button
                  type="submit"
                  className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white flex-1 sm:flex-none whitespace-nowrap"
                >
                  Publish Product
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border-gray-200 flex-1 sm:flex-none whitespace-nowrap"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save to draft
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white border-gray-200 shrink-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Main Details */}
            <div className="lg:col-span-8 space-y-8">
              {/* Basic Details */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Basic Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Product Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="iPhone 15"
                            className="shadow-none border-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Product Description
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              placeholder="The iPhone 15 delivers cutting-edge performance..."
                              className="min-h-40 resize-y pr-8 shadow-none border-none"
                              {...field}
                            />
                            {/* Mock Rich Text Icons */}
                            <div className="absolute bottom-3 right-3 flex items-center gap-2 text-gray-400">
                              <div className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </div>
                              <div className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Price</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              placeholder="$999.89"
                              className="pr-16 shadow-none border-none"
                              {...field}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 text-xs text-gray-600">
                              <ReactCountryFlag countryCode="US" svg />
                              <span className="text-[10px]">▼</span>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="discountedPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-600">
                            Discounted Price{" "}
                            <span className="text-gray-400 font-normal">
                              (Optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                $
                              </div>
                              <Input
                                type="number"
                                placeholder="99"
                                className="pl-7 shadow-none border-none"
                                {...field}
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                Sale= $900.89
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="taxIncluded"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Tax Included</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-6 mt-2"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  No
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Expiration */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Expiration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-between text-left font-normal h-11 shadow-none border-none",
                                    "bg-[#F9FAFB]", // Explicit bg to match inputs
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Start</span>
                                  )}
                                  <CalendarIcon className="h-4 w-4 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-between text-left font-normal h-11 shadow-none border-none",
                                    "bg-[#F9FAFB]",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>End</span>
                                  )}
                                  <CalendarIcon className="h-4 w-4 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Inventory */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Inventory
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="stockQuantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Unlimited"
                              className="shadow-none border-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="stockStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[#F9FAFB] shadow-none border-none">
                                <SelectValue placeholder="Select stock status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="IN_STOCK">In Stock</SelectItem>
                              <SelectItem value="OUT_OF_STOCK">
                                Out of Stock
                              </SelectItem>
                              <SelectItem value="LOW_STOCK">
                                Low Stock
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="isUnlimited"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg p-0">
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer text-gray-600 mt-0!">
                            Unlimited
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isFeatured"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="bg-green-500 border-green-500 text-white"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal text-gray-500">
                            Highlight this product in a featured section.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      className="bg-white border-gray-200"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save to draft
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white"
                    >
                      Publish Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Upload Product Image */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Upload Product Image
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <FormLabel className="text-[#4EA674] text-sm font-medium mb-3 block">
                      Product Image
                    </FormLabel>
                    <Input
                      type="file"
                      multiple
                      className="hidden"
                      ref={fileInputRef}
                      onChange={onImageUpload}
                      accept="image/*"
                    />
                    <Input
                      type="file"
                      multiple
                      className="hidden"
                      ref={replaceInputRef}
                      onChange={onReplaceImage}
                      accept="image/*"
                    />
                    <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-[#F9FAFB] text-center">
                      <div className="aspect-square relative flex flex-col items-center justify-center min-h-[200px]">
                        {imagePreviews.length > 0 ? (
                          <img
                            src={imagePreviews[0]}
                            alt="Product Preview"
                            className="max-h-[200px] object-contain mb-4"
                          />
                        ) : (
                          <div className="text-gray-400 mb-4">
                            <ImageIcon className="h-16 w-16 mx-auto opacity-20" />
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="text-gray-500 bg-white border-gray-200"
                          onClick={triggerFileInput}
                        >
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Browse
                        </Button>
                        {imagePreviews.length > 0 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-gray-500 bg-white border-gray-200"
                            onClick={triggerReplaceInput}
                          >
                            <RotateCw className="h-4 w-4 mr-2" />
                            Replace
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {imagePreviews.map((preview, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square border border-gray-100 rounded-lg p-1 bg-white"
                      >
                        <img
                          src={preview}
                          alt={`Thumb ${idx}`}
                          className="w-full h-full object-contain rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1 right-1 p-0.5 bg-white rounded-full shadow hover:bg-gray-100 border border-gray-100"
                        >
                          <X className="h-3 w-3 text-gray-500" />
                        </button>
                      </div>
                    ))}
                    <div
                      onClick={triggerFileInput}
                      className="aspect-square border border-dashed border-green-300 rounded-lg flex flex-col items-center justify-center text-green-600 hover:bg-green-50 cursor-pointer bg-[#F0FDF4]"
                    >
                      <div className="bg-green-100 p-1.5 rounded-full mb-1">
                        <Plus className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-xs font-medium">Add Image</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Categories</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#F9FAFB] shadow-none border-none">
                              <SelectValue placeholder="Select your product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories?.data?.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                            {!categories?.data?.length && (
                              <SelectItem value="loading" disabled>
                                Loading...
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tagId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Tag</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#F9FAFB] shadow-none border-none">
                              <SelectValue placeholder="Select your product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new">New Arrival</SelectItem>
                            <SelectItem value="sale">Best Seller</SelectItem>
                            <SelectItem value="featured">Featured</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormLabel className="mb-3 block">
                      Select your color
                    </FormLabel>
                    <div className="flex gap-3">
                      {[
                        "#d9f99d",
                        "#fbcfe8",
                        "#cbd5e1",
                        "#fef3c7",
                        "#374151",
                      ].map((color) => (
                        <div
                          key={color}
                          className="h-8 w-8 rounded-lg cursor-pointer shadow-sm hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all border border-gray-100"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
