import { AssignmentUpdateManyWithoutLoadsInput } from "./AssignmentUpdateManyWithoutLoadsInput";
import { NegotiationUpdateManyWithoutLoadsInput } from "./NegotiationUpdateManyWithoutLoadsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoadUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutLoadsInput;
  deliveryDate?: Date | null;
  destination?: string | null;
  details?: string | null;
  negotiations?: NegotiationUpdateManyWithoutLoadsInput;
  origin?: string | null;
  pickupDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  weight?: number | null;
};
