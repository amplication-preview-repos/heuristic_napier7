import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LoadTitle } from "../load/LoadTitle";
import { NegotiationTitle } from "../negotiation/NegotiationTitle";
import { UserTitle } from "../user/UserTitle";

export const AssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="finalAmount" source="finalAmount" />
        <ReferenceInput source="load.id" reference="Load" label="Load">
          <SelectInput optionText={LoadTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="negotiation.id"
          reference="Negotiation"
          label="Negotiation"
        >
          <SelectInput optionText={NegotiationTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
