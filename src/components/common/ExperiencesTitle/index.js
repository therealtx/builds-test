import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const ExperiencesTitle = ({title, seeAllUrl}) => {
  const hideHeader = !title && !seeAllUrl;
  if (hideHeader) return null;

  return (
    <div className={styles.experiencesTitle}>
      {title && <div className={styles.title}>{title}</div>}
      {seeAllUrl && <Link href={seeAllUrl}><a className={styles.seeAll}>See All</a></Link>}
    </div>
  )
}

export default ExperiencesTitle;
