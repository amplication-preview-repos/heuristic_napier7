import { AssignmentCreateNestedManyWithoutUsersInput } from "./AssignmentCreateNestedManyWithoutUsersInput";
import { LoadCreateNestedManyWithoutUsersInput } from "./LoadCreateNestedManyWithoutUsersInput";
import { NegotiationCreateNestedManyWithoutUsersInput } from "./NegotiationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutUsersInput;
  companyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loads?: LoadCreateNestedManyWithoutUsersInput;
  negotiations?: NegotiationCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  roleType?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
