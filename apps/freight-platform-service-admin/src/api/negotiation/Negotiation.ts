import { Assignment } from "../assignment/Assignment";
import { Load } from "../load/Load";
import { User } from "../user/User";

export type Negotiation = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  id: string;
  load?: Load | null;
  newAmount: number | null;
  proposedAmount: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
