import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const CategoryHead = ({
                        title,
                        backgroundColor,
                        imageBackground,
                        imagePath
                      }) => {
  return (
    <div
      className={styles.categoryHead}
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
        <Image src={imagePath} alt={title} width={50} height={50}/>
      </div>
      <div className={styles.shareUrl}>
        Share
      </div>
    </div>
  )
};

export default React.memo(CategoryHead);