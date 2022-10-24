import React from 'react';
import { useData } from '../../hooks/useData';
import styles from "./AlbumsList.module.scss";
import { AlbumsItem } from './components/AlbumsItem/AlbumsItem';

const AlbumsList = () => {

  const { data } = useData();

  return (
    <div className={styles.list}>
      {
        data &&
        data.map(item => {
          return <AlbumsItem 
            key={item.id}
            {...item}
          />
        })
      }
    </div>
  )
}

export { AlbumsList };