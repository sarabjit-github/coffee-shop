import "./Scss/App.css";
import { About } from "./Components/About/About";
import { Menu } from "./Components/Menu/Menu";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cart } from "./Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Components/Homepage/Homepage";
import { SearchPage } from "./Components/SearchPage/SearchPage";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import { NotFound } from "./Components/NotFound/NotFound";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ourproduct" element={<Menu />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/search/:searchItem" element={<SearchPage />} />
          <Route exact path="/products/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
