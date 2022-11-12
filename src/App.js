import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserForm from "./Components/UserForm/UserForm";
import UserTable from "./Components/UserTable/UserTable";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UserTable} />
        <Route path="/userform" component={UserForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
