import React, { useState } from 'react';
import { useData } from '../../hooks/useData';
import styles from "./Search.module.scss";

const Search = () => {

  const { searchAlbums } = useData();
  const [searchInput, setSeactInput] = useState("");

  async function search(e) {
    e && e.preventDefault();
    console.log("Search for " + searchInput);
    await searchAlbums(searchInput);
    setSeactInput("");
  };

  return (
    <form className={styles.form}>
      <input 
        type="text" 
        placeholder="Type anything"
        value={searchInput}
        onKeyPress={e => e.key == "Enter" ? search() : null}
        onChange={e => setSeactInput(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={e => search(e)}
        disabled={!searchInput}
      >
        Search
      </button>
    </form>
  );
};

export { Search };