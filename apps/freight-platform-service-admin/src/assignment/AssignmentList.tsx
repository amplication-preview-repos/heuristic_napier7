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
import { NEGOTIATION_TITLE_FIELD } from "../negotiation/NegotiationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AssignmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Assignments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="finalAmount" source="finalAmount" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Load" source="load.id" reference="Load">
          <TextField source={LOAD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Negotiation"
          source="negotiation.id"
          reference="Negotiation"
        >
          <TextField source={NEGOTIATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
