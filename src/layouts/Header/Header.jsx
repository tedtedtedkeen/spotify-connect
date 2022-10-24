import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        Spotify Connect 
      </h2>
    </header>
  )
}

export { Header };