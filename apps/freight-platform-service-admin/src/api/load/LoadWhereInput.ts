import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NegotiationListRelationFilter } from "../negotiation/NegotiationListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LoadWhereInput = {
  assignments?: AssignmentListRelationFilter;
  deliveryDate?: DateTimeNullableFilter;
  destination?: StringNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
  negotiations?: NegotiationListRelationFilter;
  origin?: StringNullableFilter;
  pickupDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
  weight?: FloatNullableFilter;
};
