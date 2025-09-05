import { Assignment } from "../assignment/Assignment";
import { Load } from "../load/Load";
import { Negotiation } from "../negotiation/Negotiation";
import { JsonValue } from "type-fest";

export type User = {
  assignments?: Array<Assignment>;
  companyName: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loads?: Array<Load>;
  negotiations?: Array<Negotiation>;
  phoneNumber: string | null;
  roleType?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
