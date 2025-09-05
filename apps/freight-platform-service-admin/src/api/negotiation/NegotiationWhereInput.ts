import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoadWhereUniqueInput } from "../load/LoadWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NegotiationWhereInput = {
  assignments?: AssignmentListRelationFilter;
  id?: StringFilter;
  load?: LoadWhereUniqueInput;
  newAmount?: FloatNullableFilter;
  proposedAmount?: FloatNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
