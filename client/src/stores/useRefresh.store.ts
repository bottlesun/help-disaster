import create from "zustand";

type useRefreshStore = {
  refresh: boolean;
  setRefresh: (state: boolean) => void;
};

export const useRefreshStore = create<useRefreshStore>((set) => ({
  refresh: false,
  setRefresh: (state: boolean) => set({ refresh: state })
}));
