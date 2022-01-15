import React from "react";
import Link from "next/link";
import c from "classnames";
import style from "./index.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.iconsGroup}>
        <Link href="/">
          <a className={c(style.headerIcons, style.backIcon)}/>
        </Link>
        <Link href="/">
          <a className={c(style.headerIcons, style.homeIcon)}/>
        </Link>
      </div>
      <div></div>
      <div className={style.iconsGroup}>
        <Link href="/">
          <a className={c(style.headerIcons, style.notificationIcon)}/>
        </Link>
        <Link href="/">
          <a className={c(style.headerIcons, style.settingsIcon)}/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
