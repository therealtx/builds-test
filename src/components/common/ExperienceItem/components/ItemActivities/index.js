import React from "react";
import SingleActivity from "./Item";
import styles from "./index.module.scss";

const ItemActivities = ({activities = []}) => {
  return (
    <div className={styles.itemActivities}>
      <div className={styles.countWrapper}>
        <div className={styles.count}>{`${activities.length} activity found`}</div>
      </div>

      <div className={styles.list}>
        {activities.map((item, index) => (
          <SingleActivity key={index} {...item} />
        ))}
      </div>
    </div>
  )
};

export default ItemActivities;