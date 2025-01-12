import React from "react";
import styles from "./Search.module.scss";

const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder="Поиск пиццы..." />
    </div>
  );
};

export default Search;
