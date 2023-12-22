import { create } from "zustand";

export const useTicketsStore = create((set) => ({
  tickets: [],
  users: [],
  setTickets: (data) => set({ tickets: data.tickets }),
  setUsers: (data) => set({ users: data.users }),
}));
