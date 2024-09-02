import { RowData } from "@type/api.type";
import { create } from "zustand";

type UseMsgDataStore = {
  msgData: RowData[];
  setMsgData: (state: RowData[]) => void;
};

export const useMsgDataStore = create<UseMsgDataStore>((set) => ({
  msgData: [],
  setMsgData: (state: RowData[]) => set({ msgData: state })
}));
