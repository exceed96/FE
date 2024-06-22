import { create } from "zustand";

export type TuseWidth = {
  width: number;
  setWidth: (width: number) => void;
};

export const useWidth = create<TuseWidth>((set) => ({
  width: typeof window !== "undefined" ? window.innerWidth : 0,
  setWidth: (width) => set({ width }),
}));
