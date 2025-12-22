import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const productSchema = z.object({
  name: z.string().min(1, "Product Name is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be a positive number"),
  discountedPrice: z.coerce.number().optional(),
  taxIncluded: z.enum(["yes", "no"]).default("yes"),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  stockQuantity: z.coerce.number().min(0).default(0),
  stockStatus: z
    .enum(["IN_STOCK", "OUT_OF_STOCK", "LOW_STOCK"])
    .default("IN_STOCK"),
  isUnlimited: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  categoryId: z.string().optional(),
  tagId: z.string().optional(),
  colors: z.array(z.string()).optional(),
  images: z.array(z.any()).optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export const useAddProduct = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      taxIncluded: "yes",
      stockQuantity: 0,
      stockStatus: "IN_STOCK",
      isUnlimited: false,
      isFeatured: false,
      colors: [],
      images: [],
    },
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
      const currentImages = form.getValues("images") || [];
      form.setValue("images", [...currentImages, ...files]);
    }
  };

  const removeImage = (index: number) => {
    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);

    const currentImages = form.getValues("images") || [];
    const newImages = [...currentImages];
    newImages.splice(index, 1);
    form.setValue("images", newImages);
  };

  const onReplaceImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(newPreviews);
      form.setValue("images", files);
    }
  };

  const onSubmit = (data: ProductFormValues) => {
    console.log("Form submitted:", data);
    // TODO: Implement API call
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    imagePreviews,
    onImageUpload,
    onReplaceImage,
    removeImage,
  };
};
