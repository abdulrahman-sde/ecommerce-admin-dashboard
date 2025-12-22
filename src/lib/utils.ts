import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Helper Function logic (usually put in utils or component)
export function generatePagination(currentPage: number, totalPages: number) {
  // If total pages is small, show all
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If current page is near the start (e,g. 1, 2, 3)
  // Show 1, 2, 3, 4, ..., 20
  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  // If current page is near the end (e.g. 18, 19, 20)
  // Show 1, ..., 17, 18, 19, 20
  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  // If somewhere in the middle (e.g. 10)
  // Show 1, ..., 9, 10, 11, ..., 20
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}
