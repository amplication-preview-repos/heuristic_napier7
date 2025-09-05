import { Negotiation as TNegotiation } from "../api/negotiation/Negotiation";

export const NEGOTIATION_TITLE_FIELD = "id";

export const NegotiationTitle = (record: TNegotiation): string => {
  return record.id?.toString() || String(record.id);
};
