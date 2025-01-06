import React from "react";
import styles from "./list.module.scss";

type ListTypes = {
  list: string[];
};

function List({ list }: ListTypes) {
  return (
    <div className={styles.list}>
      <ul className={styles.list__ul}>
        {list.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
