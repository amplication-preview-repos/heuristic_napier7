import { AssignmentCreateNestedManyWithoutNegotiationsInput } from "./AssignmentCreateNestedManyWithoutNegotiationsInput";
import { LoadWhereUniqueInput } from "../load/LoadWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NegotiationCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutNegotiationsInput;
  load?: LoadWhereUniqueInput | null;
  newAmount?: number | null;
  proposedAmount?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
