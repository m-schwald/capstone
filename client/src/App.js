import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav";

import Product from "./pages/product";
import FormNewProduct from "./pages/formNewProduct";
import Offering from "./pages/offering";
import Searching from "./pages/searching";
import Welcome from "./pages/welcome";
import EditGroup from "./pages/editGroup";
import EditProfile from "./pages/editProfile";
import EditProduct from "./pages/editProduct";

function App() {
  const [userId, setUserId] = useState("60618e1876b0a8d849265636");
  const [user, setUser] = useState({});
  const [items, setItems] = useState({});

  const getUser = async () => {
    const data = await fetch("http://localhost:4000/get-user/" + userId);
    const result = await data.json();
    return result;
  };
  const loginUser = async () => {
    const userToLogin = await getUser();
    setUser(userToLogin);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loginUser(), [userId]);

  const groupId = "Motorradfreunde Oberrimsingen";

  const getGadg = async () => {
    const data = await fetch("http://localhost:4000/get-gadg");
    const result = await data.json();
    return result;
  };

  const getAllGadges = async () => {
    const gadges = await getGadg();
    setItems(gadges);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllGadges(), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllGadges(), [items]);

  return (
    <Main>
      <Nav user={user} groupId={groupId} setUserId={setUserId} />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/product/:_id">
          <Product userId={userId} />
        </Route>
        <Route path="/editProduct/:_id">
          <EditProduct items={items} />
        </Route>
        <Route path="/formNewProduct">
          <FormNewProduct userId={userId} groupId={groupId} />
        </Route>
        <Route path="/offering">
          <Offering items={items} userId={userId} groupId={groupId} />
        </Route>
        <Route path="/searching">
          <Searching items={items} userId={userId} groupId={groupId} />
        </Route>
        <Route path="/editGroup">
          <EditGroup userId={userId} groupId={groupId} />
        </Route>
        <Route path="/editProfile">
          <EditProfile userId={userId} groupId={groupId} user={user} />
        </Route>
      </Switch>
    </Main>
  );
}

export default App;

const Main = styled.main`
  overflow-x: hidden;
  height: auto;
  max-width: 100vw;
`;
