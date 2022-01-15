import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Item = ({ title, description, usersCount, imagePath, imageBackground}) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper} style={{
        backgroundColor: imageBackground
      }}>
        <Image src={imagePath} alt={title} width={30} height={30} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.usersCount}>{usersCount}</div>
      </div>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  usersCount: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageBackground: PropTypes.string.isRequired
};

export default Item;