import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LoadList } from "./load/LoadList";
import { LoadCreate } from "./load/LoadCreate";
import { LoadEdit } from "./load/LoadEdit";
import { LoadShow } from "./load/LoadShow";
import { NegotiationList } from "./negotiation/NegotiationList";
import { NegotiationCreate } from "./negotiation/NegotiationCreate";
import { NegotiationEdit } from "./negotiation/NegotiationEdit";
import { NegotiationShow } from "./negotiation/NegotiationShow";
import { AssignmentList } from "./assignment/AssignmentList";
import { AssignmentCreate } from "./assignment/AssignmentCreate";
import { AssignmentEdit } from "./assignment/AssignmentEdit";
import { AssignmentShow } from "./assignment/AssignmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Freight Platform Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Load"
          list={LoadList}
          edit={LoadEdit}
          create={LoadCreate}
          show={LoadShow}
        />
        <Resource
          name="Negotiation"
          list={NegotiationList}
          edit={NegotiationEdit}
          create={NegotiationCreate}
          show={NegotiationShow}
        />
        <Resource
          name="Assignment"
          list={AssignmentList}
          edit={AssignmentEdit}
          create={AssignmentCreate}
          show={AssignmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
