import React from "react";
import style from "./index.module.scss";

const ItemDetails = ({
                           category,
                           experience
                         }) => {
  return (
    <div className={style.itemDetails}>
      <div className={style.title}>Overview</div>
      <div className={style.description}>{experience.description}</div>
      <div className={style.urlWrapper}><a href="#" target="_blank" rel="nofollow noopener">url</a></div>
    </div>
  )
};

export default ItemDetails;