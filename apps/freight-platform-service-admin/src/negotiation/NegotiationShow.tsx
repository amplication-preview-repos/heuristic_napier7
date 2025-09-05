import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LOAD_TITLE_FIELD } from "../load/LoadTitle";
import { NEGOTIATION_TITLE_FIELD } from "./NegotiationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const NegotiationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
        <ReferenceManyField
          reference="Assignment"
          target="negotiationId"
          label="Assignments"
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
