import { SortOrder } from "../../util/SortOrder";

export type LoadOrderByInput = {
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  destination?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  origin?: SortOrder;
  pickupDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  weight?: SortOrder;
};
