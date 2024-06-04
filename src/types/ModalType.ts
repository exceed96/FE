export type TModalName = "apart" | null;

export type TUseModalState = {
  modalName?: TModalName;
  setModalName: (v: TModalName) => void;
};
