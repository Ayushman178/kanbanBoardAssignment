import { create } from "zustand";

export const useUIStore = create((set) => ({
  loading: true,
  error: null,
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (errorMessage) => set({ error: errorMessage }),
}));
