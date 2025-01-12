import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/PizzaBlock/Header";
import Cart from "./Pages/Cart";
import NotFound from "./components/NotFoundBlock/index";
import "./App.scss";
import "./scss/_variables.scss";

function App() {
  const [searchValue, setSearchValue] = React.useState(""); 

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
          <div className="content">
              <Routes>
                <Route path="/" element={<Home searchValue={searchValue}/>} />
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
