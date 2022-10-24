import React, { useState, useEffect } from "react";
import { AlbumsList } from "./components/AlbumsList";
import "./index.scss";
import { Header } from "./layouts/Header";
import { Search } from "./layouts/Search";

const App = () => {
  // console.log(process.env.OTHER);
  return (
    <div>
      <Header />
      <div className="body">
        <h1>
          Let's go!
        </h1>
        <Search />
        <AlbumsList />
      </div>
    </div>
  );
};

export { App };