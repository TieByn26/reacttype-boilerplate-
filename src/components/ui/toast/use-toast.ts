import { ToastProps } from "./toast";
import { create } from "zustand";

export type ToastsStore = {
  toasts: (ToastProps | undefined)[];
  addToast: (props: ToastProps) => void;
  dismissToast: (index: number) => void;
};

export const useToast = create<ToastsStore>((set) => ({
  toasts: [],
  addToast: (props) => {
    set((state) => ({
      toasts: [...state.toasts, props],
    }));
  },
  dismissToast: (index) => {
    set((state) => {
      const newToasts = [...state.toasts];
      newToasts[index] = undefined;
      return {
        toasts: newToasts,
      };
    });
  },
}));
