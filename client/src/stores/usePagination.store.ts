import create from "zustand";

type UsePaginationStore = {
  page: number;
  limit: number;
  setPage: (state: number) => void;
  setLimit: (state: number) => void;
};

export const UsePaginationStore = create<UsePaginationStore>((set) => ({
  page: 1,
  limit: 8,

  setPage: (state: number) => set({ page: state }),
  setLimit: (state: number) => set({ limit: state })
}));
