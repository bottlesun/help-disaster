import { RowData } from "@type/api.type";
import create from "zustand";

type UsePaginationStore = {
  page: number;
  setPage: (state: number) => void;
};

export const UsePaginationStore = create<UsePaginationStore>((set) => ({
  page: 1,
  setPage: (state: number) => set({ page: state })
}));
