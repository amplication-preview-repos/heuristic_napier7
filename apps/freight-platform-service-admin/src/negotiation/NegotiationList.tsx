import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOAD_TITLE_FIELD } from "../load/LoadTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const NegotiationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Negotiations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Load" source="load.id" reference="Load">
          <TextField source={LOAD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="newAmount" source="newAmount" />
        <TextField label="proposedAmount" source="proposedAmount" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
