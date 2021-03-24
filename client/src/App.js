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
  const [items, setItems] = useState(loadFromLocal(ITEM_KEY) ?? []);

  useEffect(() => {
    saveToLocal(ITEM_KEY, items);
  }, [items]);

  useEffect(() => {
    fetch("http://localhost:4000/get-gadg")
      .then((result) => result.json())
      .then((item) => setItems(item))
      .catch((error) => console.error(error.message));
  }, []);

  //console.log(items.map((item) => item._id));

  const [available, setAvailable] = useState(false);
  const onAvailable = (availableItem) => {
    console.log(availableItem);
    const updatedItems = items.map((item) => {
      if (item._id === availableItem._id) {
        item.isAvailable = !item.isAvailable;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <Main>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/product/:_id">
            <Product />
          </Route>
          <Route path="/formNewProduct">
            <FormNewProduct available={available} onAvailable={onAvailable} />
          </Route>
          <Route path="/offering">
            <Offering
              items={items}
              available={available}
              onAvailable={onAvailable}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/searching">
            <Searching
              items={items}
              available={available}
              onAvailable={onAvailable}
            />
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
