import React, { useState } from "react";

const kittiesContext = React.createContext();

const KittiesProvider = kittiesContext.Provider;

const KittiesContext = (props) => {
    const [favourites, setFavourites] = useState([])
  return (
    <KittiesProvider value={{favourites, setFavourites}}>{props.children}</KittiesProvider>
  );
};

export { kittiesContext, KittiesContext };
