import { create } from "zustand";

export type TMapLocation = {
  searchAreaX: string;
  setSearchAreaX: (searchAreaX: string) => void;
  searchAreaY: string;
  setSearchAreaY: (searchAreaY: string) => void;
  roadAddress: string;
  setRoadAddress: (roadAddress: string) => void;
};

export type TUseMapLocation = {
  mapLocation: TMapLocation;
};

export const useMapLocation = create<TUseMapLocation>((set) => ({
  mapLocation: {
    searchAreaX: "",
    searchAreaY: "",
    roadAddress: "",
    setSearchAreaX: (searchAreaX: string) =>
      set((state) => ({ mapLocation: { ...state.mapLocation, searchAreaX } })),
    setSearchAreaY: (searchAreaY: string) =>
      set((state) => ({ mapLocation: { ...state.mapLocation, searchAreaY } })),
    setRoadAddress: (roadAddress: string) =>
      set((state) => ({ mapLocation: { ...state.mapLocation, roadAddress } })),
  },
}));
