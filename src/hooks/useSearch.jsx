import { createContext, useState, useEffect } from "react";
  import { Api } from "../services/api";

export const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [games, setGames] = useState([]);
  const [mmorpg, setMmorpg] = useState([]);
  const [browser, setBrowser] = useState([]);
  const [pc, setPc] = useState([]);

  const [sidebar, setSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const [listGamesSearch, setListGamesSearch] = useState([]);

  const [searchClear, setSearchClear] = useState(false);

  document.body.onresize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    width >= 992 ? setIsMobile(false) : setIsMobile(true);
  }, [width]);

  const toggleSidebar = () => {
    return setSidebar(!sidebar);
  };


  function searchGame(game) {
    setListGamesSearch(
      games.filter((jogo) =>
        jogo.title.toLowerCase().includes(game.toLowerCase())
      )
    );
  }

  useEffect(() => {
    Api().then(function (response) {
      setGames(response.data);
      setListGamesSearch(response.data)
    });

  },[searchClear])

  useEffect(() => {

    Api({ category: "mmorpg" }).then(function (response) {
      setMmorpg(response.data);
    });

    Api({ platform: "browser" }).then(function (response) {
      setBrowser(response.data);
    });

    Api({ platform: "pc" }).then(function (response) {
      setPc(response.data);
    });
  }, []);
  

  return (
    <SearchContext.Provider
      value={{ games, 
        mmorpg, 
        browser, 
        pc, 
        searchGame, 
        listGamesSearch, 
        setSearchClear, 
        sidebar, 
        toggleSidebar, 
        isMobile, 
        width }}
    >
      {children}
    </SearchContext.Provider>
  );
}
