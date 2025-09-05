import { AssignmentCreateNestedManyWithoutLoadsInput } from "./AssignmentCreateNestedManyWithoutLoadsInput";
import { NegotiationCreateNestedManyWithoutLoadsInput } from "./NegotiationCreateNestedManyWithoutLoadsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoadCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutLoadsInput;
  deliveryDate?: Date | null;
  destination?: string | null;
  details?: string | null;
  negotiations?: NegotiationCreateNestedManyWithoutLoadsInput;
  origin?: string | null;
  pickupDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  weight?: number | null;
};
