import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "companyName";

export const UserTitle = (record: TUser): string => {
  return record.companyName?.toString() || String(record.id);
};
