import React from 'react';
import styles from "./AlbumsItem.module.scss";

const AlbumsItem = ({
  name, 
  images 
}) => {

  const arr = [1, 2, 3, 4, 6, 6];
// если число меньше, чем индекс - удалить его
  var minimumMountainRemovals = function(nums) {
    let i = 0
    for (; nums.length > 3; i++) {
      nums.pop();
    }
    return i;
  };

  console.log(minimumMountainRemovals(arr));

  
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