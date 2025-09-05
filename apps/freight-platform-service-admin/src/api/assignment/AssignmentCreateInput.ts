import { LoadWhereUniqueInput } from "../load/LoadWhereUniqueInput";
import { NegotiationWhereUniqueInput } from "../negotiation/NegotiationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AssignmentCreateInput = {
  finalAmount?: number | null;
  load?: LoadWhereUniqueInput | null;
  negotiation?: NegotiationWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
