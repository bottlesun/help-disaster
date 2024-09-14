import { DisasterMessageData } from "@type/api.type";
import { create } from "zustand";

type UseMsgDataStore = {
  msgData: DisasterMessageData[];
  setMsgData: (state: DisasterMessageData[]) => void;
};

export const useMsgDataStore = create<UseMsgDataStore>((set) => ({
  msgData: [],
  setMsgData: (state: DisasterMessageData[]) => set({ msgData: state })
}));
