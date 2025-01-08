import { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./App.scss";
import "./scss/_variables.scss";
import pizzaData from "./assets/pizzas.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <div className="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                {
                  pizzaData.map((obj) => (
                    <PizzaBlock
                      {...obj}
                      // key={obj.id}
                      // title={obj.title}
                      // price={obj.price}
                      // imageUrl={obj.imageUrl}
                      // sizes={obj.sizes}
                      // types={obj.types}
                    />
                  ))
                }
                {/* <PizzaBlock title="Маргарита" price="10" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
