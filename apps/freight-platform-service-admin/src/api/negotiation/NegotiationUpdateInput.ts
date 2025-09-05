import { AssignmentUpdateManyWithoutNegotiationsInput } from "./AssignmentUpdateManyWithoutNegotiationsInput";
import { LoadWhereUniqueInput } from "../load/LoadWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NegotiationUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutNegotiationsInput;
  load?: LoadWhereUniqueInput | null;
  newAmount?: number | null;
  proposedAmount?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
