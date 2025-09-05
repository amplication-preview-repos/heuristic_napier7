import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { NegotiationTitle } from "../negotiation/NegotiationTitle";
import { UserTitle } from "../user/UserTitle";

export const LoadCreate = (props: CreateProps): React.ReactElement => {
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
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <TextInput label="destination" source="destination" />
        <TextInput label="details" multiline source="details" />
        <ReferenceArrayInput source="negotiations" reference="Negotiation">
          <SelectArrayInput
            optionText={NegotiationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="origin" source="origin" />
        <DateTimeInput label="pickupDate" source="pickupDate" />
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
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
