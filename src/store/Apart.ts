import { create } from "zustand";
import { TApartModal } from "@/types/ApartModalType";
import { TAPartDataType } from "@/types/ApartDataType";

export const useApartState = create<TApartModal>((set) => ({
  data: null,
  setData: (data: TAPartDataType) => set({ data }),
}));
