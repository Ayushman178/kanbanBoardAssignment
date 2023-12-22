import { create } from "zustand";
import { DisplayOptions } from "../lib/constants";

export const useDisplayOptionsStore = create((set) => ({
  displayOption:
    localStorage.getItem("displayOption") || DisplayOptions.BY_STATUS,
  setDisplayOption: (option) => set({ displayOption: option }),
}));
