import { create } from "zustand";
import { TUseDropDownState, TDropDownState } from "@/types/DropDownType";

export const useDropDown = create<TUseDropDownState>((set) => ({
  dropDownState: "NEW",
  setDropDownState: (v: TDropDownState) => set({ dropDownState: v }),
}));
