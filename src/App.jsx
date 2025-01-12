import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/PizzaBlock/Header";
import Cart from "./Pages/Cart";
import NotFound from "./components/NotFoundBlock/index";
import "./App.scss";
import "./scss/_variables.scss";

function App() {

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
