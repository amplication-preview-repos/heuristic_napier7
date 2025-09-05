import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { LoadTitle } from "../load/LoadTitle";
import { UserTitle } from "../user/UserTitle";

export const NegotiationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="assignments" reference="Assignment">
          <SelectArrayInput
            optionText={AssignmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="load.id" reference="Load" label="Load">
          <SelectInput optionText={LoadTitle} />
        </ReferenceInput>
        <NumberInput label="newAmount" source="newAmount" />
        <NumberInput label="proposedAmount" source="proposedAmount" />
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
    </Create>
  );
};
