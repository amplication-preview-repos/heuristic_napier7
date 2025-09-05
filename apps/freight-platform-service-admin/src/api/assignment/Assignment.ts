import { Load } from "../load/Load";
import { Negotiation } from "../negotiation/Negotiation";
import { User } from "../user/User";

export type Assignment = {
  createdAt: Date;
  finalAmount: number | null;
  id: string;
  load?: Load | null;
  negotiation?: Negotiation | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
