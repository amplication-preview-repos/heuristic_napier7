import { Assignment } from "../assignment/Assignment";
import { Negotiation } from "../negotiation/Negotiation";
import { User } from "../user/User";

export type Load = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  deliveryDate: Date | null;
  destination: string | null;
  details: string | null;
  id: string;
  negotiations?: Array<Negotiation>;
  origin: string | null;
  pickupDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  weight: number | null;
};
