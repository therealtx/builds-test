import React from "react";
import ExperiencesTitle from "components/common/ExperiencesTitle";
import Item from "./Item";
import styles from "./index.module.scss";

import recentExperiencesData from "testData/recent-experiences";

export default function ExperiencesList({
                                          title = "",
                                          seeAllUrl = "",
                                          items = recentExperiencesData
                                        }) {
  return (
    <div className={styles.experiencesList}>
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