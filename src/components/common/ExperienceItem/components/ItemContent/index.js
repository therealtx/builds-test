import React from "react";
import Link from "next/link";
import nFormatter from "utils/nFormatter";
import styles from "./index.module.scss";

const ItemContent = ({
                           title,
                           description,
                           categoryName,
                           path,
                           usersCount
                         }) => {
  return (
    <div className={styles.itemContent}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.categoryName}>{categoryName}</div>
      <div className={styles.footer}>
          <Link href={path}><a className={styles.button}>Open</a></Link>
        <div className={styles.usersCount}>
          +{nFormatter(usersCount)} users
        </div>
      </div>
    </div>
  )
};

export default ItemContent;