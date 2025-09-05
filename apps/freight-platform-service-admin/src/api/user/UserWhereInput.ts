import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoadListRelationFilter } from "../load/LoadListRelationFilter";
import { NegotiationListRelationFilter } from "../negotiation/NegotiationListRelationFilter";

export type UserWhereInput = {
  assignments?: AssignmentListRelationFilter;
  companyName?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  loads?: LoadListRelationFilter;
  negotiations?: NegotiationListRelationFilter;
  phoneNumber?: StringNullableFilter;
  roleType?: "Option1";
  username?: StringFilter;
};
