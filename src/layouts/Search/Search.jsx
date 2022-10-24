import React, { useState } from 'react';
import { useData } from '../../hooks/useData';
import styles from "./Search.module.scss";

const Search = () => {

  const { searchAlbums } = useData();
  const [searchInput, setSeactInput] = useState("");

  function search(event) {
    event.preventDefault();
    console.log("Search for " + searchInput);
    searchAlbums(searchInput);
    setSeactInput("");
  }

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
        onClick={search}
      >
        Search
      </button>
    </form>
  )
}

export { Search };