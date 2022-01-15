import React from "react";
import styles from "./index.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Search Experiences" />
      </div>
      <div>
        <div className={styles.filterIcon}></div>
      </div>
    </div>
  );
}