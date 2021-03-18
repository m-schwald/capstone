import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

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
            <Offering />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/searching">
            <Searching />
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
