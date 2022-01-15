import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

const SingleActivity = ({
                          avatar,
                          username,
                          content,
                          timestamp
                        }) => {
  const wrapTags = (text, regex, replaceWith, className) => {
    const textArray = text.split(regex);
    if (textArray.length < 2) return text;
    return textArray.map((str, index) => {
      if (index < textArray.length - 1) {
        return <>{str} <Link href={`/user/${username}`}><a className={className}>{replaceWith}</a></Link></>;
      }
      return str;
    });
  };

  return (
    <div className={styles.singleActivity}>
      <div className={styles.avatarWrapper}>
        <Image src={avatar} alt={username} layout="fill" />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          {wrapTags(content, "%username%", username, styles.userName)}
        </div>
        <div className={styles.date}>{timestamp}</div>
      </div>
    </div>
  )
};

export default React.memo(SingleActivity);
