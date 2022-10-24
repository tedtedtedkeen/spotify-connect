import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const CLIENT_ID = "51f8524e754f4c0892822b13e1b790dd";
const CLIENT_SECRET = "45b0c642511c4900bce6c50081dae821";

function DataProvider({ children }) {

  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(res => res.json())
      .then(data => setAccessToken(data.access_token))
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

    const returnedAlbums = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/albums" + "?include_groups=album&market=RU&limit=9", searchParameters)
      .then(res => res.json())
      .then(data => setData(data.items))
  }

  return (
    <DataContext.Provider value={{ data, searchAlbums }}>
      { children }
    </DataContext.Provider>
  );
};

export { DataProvider };