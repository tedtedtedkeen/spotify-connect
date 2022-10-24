import React from 'react';
import styles from "./AlbumsItem.module.scss";

const AlbumsItem = ({
  name, 
  images 
}) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.img} 
        src={images[1].url}
        alt="cover" 
      />
      <h3 className={styles.t}>
        { name }
      </h3>
    </div>
  );
};

export { AlbumsItem };