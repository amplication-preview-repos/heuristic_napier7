import { LoadWhereInput } from "./LoadWhereInput";
import { LoadOrderByInput } from "./LoadOrderByInput";

export type LoadFindManyArgs = {
  where?: LoadWhereInput;
  orderBy?: Array<LoadOrderByInput>;
  skip?: number;
  take?: number;
};
