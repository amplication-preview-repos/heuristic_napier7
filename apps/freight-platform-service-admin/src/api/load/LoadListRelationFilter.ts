import { LoadWhereInput } from "./LoadWhereInput";

export type LoadListRelationFilter = {
  every?: LoadWhereInput;
  some?: LoadWhereInput;
  none?: LoadWhereInput;
};
