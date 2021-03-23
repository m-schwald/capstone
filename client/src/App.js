import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import loadFromLocal from "./lib/loadFromLocal";
import saveToLocal from "./lib/saveToLocal";

import Nav from "./components/Nav";

import Product from "./pages/product";
import FormNewProduct from "./pages/formNewProduct";
import Offering from "./pages/offering";
import Dashboard from "./pages/dashboard";
import Searching from "./pages/searching";
import Welcome from "./pages/welcome";
import EditGroup from "./pages/editGroup";
import EditProfile from "./pages/editProfile";

function App() {
  const ITEM_KEY = "itemList";
  /* const USER_KEY = "userList";
  const GROUP_KEY = "groupList"; */

  const [items, setItems] = useState(loadFromLocal(ITEM_KEY) ?? []);
  /*   const [users, setUsers] = useState(loadFromLocal(USER_KEY) ?? []);
  const [groups, setGroups] = useState(loadFromLocal(GROUP_KEY) ?? []); */

  useEffect(() => {
    saveToLocal(ITEM_KEY, items);
  }, [items]);

  /*  useEffect(() => {
    saveToLocal(USER_KEY, users);
  }, [users]);

  useEffect(() => {
    saveToLocal(GROUP_KEY, groups);
  }, [groups]); */

  useEffect(() => {
    fetch("http://localhost:4000/get-gadg")
      .then((result) => result.json())
      .then((item) => setItems(item))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <>
      <Main>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/formNewProduct">
            <FormNewProduct />
          </Route>
          <Route path="/offering">
            <Offering items={items} />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/searching">
            <Searching items={items} />
          </Route>
          <Route path="/editGroup">
            <EditGroup />
          </Route>
          <Route path="/editProfile">
            <EditProfile />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  overflow-x: hidden;
  height: auto;
  max-width: 100vw;
`;
