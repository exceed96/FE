import { create } from "zustand";
import { TModalName, TUseModalState } from "@/types/ModalType";

export const useModalState = create<TUseModalState>((set) => ({
  modalName: null,
  setModalName: (modalName: TModalName) => set({ modalName }),
}));
