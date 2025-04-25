import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useOverlay } from "../../components/ui";
import { useToast } from "../../components/ui";
import { apiClient } from "../../libs/api-client";
import { ResponseMessage } from "../../types/common";
import { z } from "zod";

export const registerInputSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(6, "Required"),
});

const postRegisterData = (data: z.infer<typeof registerInputSchema>) => {
  return apiClient.post("/auth/register", data);
};

export const useRegister = (alert: React.ReactNode) => {
  const { display } = useOverlay();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postRegisterData,
    onSuccess: () => {
      display(alert);
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Something went wrong",
        message: data.message,
        type: "error",
      });
    },
  });
};