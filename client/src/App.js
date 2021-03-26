import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";

//import loadFromLocal from "./lib/loadFromLocal";
//import saveToLocal from "./lib/saveToLocal";

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
  const userId = "Herbert Gackelmaier";
  const groupId = "Motorradfreunde Oberrimsingen";

  /*const ITEM_KEY = "itemList";

    useEffect(() => {
    saveToLocal(ITEM_KEY, items);
  }, [items]); */
  const getGadg = async () => {
    const data = await fetch("http://localhost:4000/get-gadg");
    const result = await data.json();
    return result;
  };

  const { data } = useQuery("allGadges", getGadg);
  const [items, setItems] = useState(data);

  useEffect(() => {
    fetch("http://localhost:4000/get-gadg")
      .then((result) => result.json())
      .then((item) => setItems(item))
      .catch((error) => console.error(error.message));
  }, []);

  const onAvailable = (availableItem) => {
    const updatedItems = items.map((item) => {
      if (item._id === availableItem._id) {
        item.isAvailable = !item.isAvailable;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <Main>
      <Nav userId={userId} groupId={groupId} />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/product/:_id">
          <Product />
        </Route>
        <Route path="/formNewProduct">
          <FormNewProduct
            onAvailable={onAvailable}
            userId={userId}
            groupId={groupId}
          />
        </Route>
        <Route path="/offering">
          <Offering
            items={items}
            onAvailable={onAvailable}
            userId={userId}
            groupId={groupId}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/searching">
          <Searching items={items} userId={userId} groupId={groupId} />
        </Route>
        <Route path="/editGroup">
          <EditGroup userId={userId} groupId={groupId} />
        </Route>
        <Route path="/editProfile">
          <EditProfile userId={userId} groupId={groupId} />
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
