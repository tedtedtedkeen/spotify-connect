import React, { createContext, useState, useEffect, useContext } from "react";
import { ID, CLIENT_SECRET } from "../../hidded";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

function DataProvider({ children }) {

  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials&client_id=" + ID + "&client_secret=" + CLIENT_SECRET
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(res => res.json())
      .then(data => setAccessToken(data.access_token))
      .catch(e => e.message)
  }, []);

  async function searchAlbums(inputValue) {
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    };

    const artistID = await fetch("https://api.spotify.com/v1/search?q=" + inputValue + "&type=artist", searchParameters)
      .then(res => res.json())
      .then(data => { return data.artists.items[0].id })
      .catch(e => e.message);

    const returnedAlbums = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/albums" + "?include_groups=album&market=RU&limit=9", searchParameters)
      .then(res => res.json())
      .then(data => setData(data.items))
      .catch(e => e.message);
  }

  return (
    <DataContext.Provider value={{ data, searchAlbums }}>
      { children }
    </DataContext.Provider>
  );
};

export { DataProvider };