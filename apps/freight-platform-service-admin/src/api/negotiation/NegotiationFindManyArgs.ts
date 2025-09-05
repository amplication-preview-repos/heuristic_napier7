import { NegotiationWhereInput } from "./NegotiationWhereInput";
import { NegotiationOrderByInput } from "./NegotiationOrderByInput";

export type NegotiationFindManyArgs = {
  where?: NegotiationWhereInput;
  orderBy?: Array<NegotiationOrderByInput>;
  skip?: number;
  take?: number;
};
