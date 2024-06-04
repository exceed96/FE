import { TAPartDataType } from "./ApartDataType";

export type TApartModal = {
  data?: TAPartDataType;
  setData: (data: TAPartDataType) => void;
};
