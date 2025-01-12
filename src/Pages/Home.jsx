import React from "react";
import Categories from "../components/PizzaBlock/Categories";
import Sort from "../components/PizzaBlock/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useEffect } from "react";

const Home = ({searchValue}) => {
  const [pizzaData, setPizzaData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating'
  });

  useEffect(() => {
    debugger
    let category = categoryId > 0 ? categoryId : '';
    let search = searchValue ? searchValue : '';
    debugger
    setIsLoading(true);
    fetch(`https://63de507d9fa0d60060fc8e1c.mockapi.io/items?category=${category}&sortBy=${sortType.sortProperty}&order=desc&search=${search}`)
    .then((res) => {
      return res.json();
    }).then(json => {
      debugger
      if(Array.isArray(json) && json.length > 0) {
        setPizzaData(json);
        setIsLoading(false);
      }
    });
    window.scrollTo(0,0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={(i) => setCategoryId(i)}/>
        <Sort sortType={sortType} setSortType={setSortType}/>
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading
          ? pizzaData
          .filter(obj => {
            return obj .title?.toLowerCase().includes(searchValue?.toLowerCase());
          })
          .map((obj) => (
              <PizzaBlock
                {...obj}
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes || []}
                types={obj.types || []}
              />
            ))
          : nine.map((elem, index) => <Skeleton key={index}/>)}
      </div>
    </div>
  );
};

export default Home;
