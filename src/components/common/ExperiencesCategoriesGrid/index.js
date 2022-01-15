import React from "react";
import ExperiencesTitle from "components/common/ExperiencesTitle";
import Item from "./Item";
import styles from "./index.module.scss";

export default function ExperiencesCategoriesGrid({title, seeAllUrl, items = []}) {
  return (
    <div className={styles.experiencesGrid}>
      <ExperiencesTitle
        title={title}
        seeAllUrl={seeAllUrl}
      />

      <div className={styles.items}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  )
}