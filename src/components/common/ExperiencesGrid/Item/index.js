import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./inde.module.scss";

const Item = ({
                title,
                path,
                backgroundColor,
                imagePath,
                imageBackground
              }) => {
  return (
    <Link href={path}>
      <div
        className={styles.item}
        style={{
          backgroundColor
        }}
      >
        <div
          className={styles.imageWrapper}
          style={{
            backgroundColor: imageBackground
          }}
        >
          <div className={styles.imageItem}>
            <Image src={imagePath} alt={title} width={20} height={20} />
          </div>
        </div>

        <div className={styles.title}>
          {title}
        </div>
      </div>
    </Link>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageBackground: PropTypes.string.isRequired,
};

export default Item;
