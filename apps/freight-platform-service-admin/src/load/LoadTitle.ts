import { Load as TLoad } from "../api/load/Load";

export const LOAD_TITLE_FIELD = "destination";

export const LoadTitle = (record: TLoad): string => {
  return record.destination?.toString() || String(record.id);
};
