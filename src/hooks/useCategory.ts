import { useGetCategoriesQuery } from "@/lib/store/services/categories/categoryApi";

export const useCategory = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery();

  return {
    data,
    isLoading,
    isError,
  };
};
