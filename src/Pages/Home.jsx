import React from "react";
import Categories from "../components/PizzaBlock/Categories";
import Sort from "../components/PizzaBlock/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useEffect } from "react";

const Home = () => {
  const [pizzaData, setPizzaData] = React.useState([]);
  const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  useEffect(() => {
    debugger
    let categoryIdQueryParam = '';
    if(categoryId > 0) {
        categoryIdQueryParam = categoryId;
    }
    debugger
    fetch("https://63de507d9fa0d60060fc8e1c.mockapi.io/items?category=" + categoryIdQueryParam)
    .then((res) => {
      return res.json();
    }).then(json => {
      debugger
      if(!pizzaData.length) {
        setPizzaData(json);
      }
    });
    window.scrollTo(0,0);
  }, [categoryId])

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={(i) => setCategoryId(i)}/>
        <Sort sortType={sortType} setSortType={setSortType}/>
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaData.length > 0
          ? pizzaData.map((obj) => (
              <PizzaBlock
                {...obj}
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
              />
            ))
          : nine.map((elem, index) => <Skeleton key={index}/>)}
      </div>
    </div>
  );
};

export default Home;
