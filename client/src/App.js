import Nav from "./components/Nav";
import Product from "./pages/Product";
import FormNewProduct from "./pages/FormNewProduct";
import Offering from "./pages/Offering";
import Dashboard from "./pages/Dashboard";
import Searching from "./pages/Searching";

function App() {
  return (
    <>
      <Nav />
      <Product />
      <FormNewProduct />
      <Offering />
      <Dashboard />
      <Searching />
    </>
  );
}

export default App;
