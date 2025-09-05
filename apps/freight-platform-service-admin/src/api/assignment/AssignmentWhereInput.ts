import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoadWhereUniqueInput } from "../load/LoadWhereUniqueInput";
import { NegotiationWhereUniqueInput } from "../negotiation/NegotiationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AssignmentWhereInput = {
  finalAmount?: FloatNullableFilter;
  id?: StringFilter;
  load?: LoadWhereUniqueInput;
  negotiation?: NegotiationWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
