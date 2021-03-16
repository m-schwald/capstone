import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

import Product from "./pages/product";
import FormNewProduct from "./pages/formNewProduct";
import Offering from "./pages/offering";
import Dashboard from "./pages/dashboard";
import Searching from "./pages/searching";
import Welcome from "./pages/welcome";

function App() {
  return (
    <>
      <Nav />
      <main>
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
        </Switch>
      </main>
    </>
  );
}

export default App;
