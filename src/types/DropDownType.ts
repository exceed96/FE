export type TDropDownState = "NEW" | "OLD";

export type TUseDropDownState = {
  dropDownState: TDropDownState;
  setDropDownState: (v: TDropDownState) => void;
};
