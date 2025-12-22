import type { ApiError } from "@/types/shared.types";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "sonner";
import type { Middleware } from "@reduxjs/toolkit";
export const rtkQueryErrorLogger: Middleware = (_api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // 1. Extract the JSON body returned by your Express errorHandler
    const payload = action.payload as { status: number; data: ApiError };
    const errorData = payload.data;

    // 2. Handle Zod/Validation Errors specifically
    if (errorData?.message === "Validation error" && errorData.errors) {
      // Pick the first error message to show in the toast
      const firstField = Object.keys(errorData.errors)[0];
      const fieldError = errorData.errors[firstField];
      const message = Array.isArray(fieldError)
        ? fieldError[0]
        : "Invalid input";

      toast.error(`Validation Error: ${firstField}`, {
        description: message,
      });
    }
    // 3. Handle Prisma/AppError/General Errors
    else {
      toast.error(errorData?.message || "Internal Server Error", {
        description: `Status: ${payload.status || 500}`,
      });
    }
  }

  return next(action);
};
