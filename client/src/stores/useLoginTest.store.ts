import { create } from "zustand";

type UseFormDataStore = {
  login: boolean;
  setLogin: (state: boolean) => void;
};

export const useLoginTestStore = create<UseFormDataStore>((set) => ({
  login: false,
  setLogin: (state: boolean) => set({ login: state })
}));
