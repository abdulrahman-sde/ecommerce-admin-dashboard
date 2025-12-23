import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  customerSchema,
  type CustomerFormValues,
} from "@/schemas/customer.schema";

export const useAddCustomer = () => {
  const navigate = useNavigate();

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apartment: "",
      city: "",
      country: "",
      postalCode: "",
      addressPhone: "",
      notes: "",
    },
  });

  const onSubmit = (data: CustomerFormValues) => {
    // Console log the form data as requested
    console.log("Adding Customer Data:", data);

    // Simulate success
    toast.success("Customer data submitted successfully (logged to console)");

    // In a real app, we would make a network request here
    // for now we just navigate back after a small delay
    setTimeout(() => {
      navigate("/dashboard/customers");
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/dashboard/customers");
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    handleCancel,
    isLoading: false, // For now, since no network request
  };
};
