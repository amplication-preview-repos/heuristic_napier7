import { AssignmentUpdateManyWithoutUsersInput } from "./AssignmentUpdateManyWithoutUsersInput";
import { LoadUpdateManyWithoutUsersInput } from "./LoadUpdateManyWithoutUsersInput";
import { NegotiationUpdateManyWithoutUsersInput } from "./NegotiationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutUsersInput;
  companyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loads?: LoadUpdateManyWithoutUsersInput;
  negotiations?: NegotiationUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  roleType?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
