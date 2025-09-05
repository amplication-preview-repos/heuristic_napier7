import { SortOrder } from "../../util/SortOrder";

export type NegotiationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  loadId?: SortOrder;
  newAmount?: SortOrder;
  proposedAmount?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
