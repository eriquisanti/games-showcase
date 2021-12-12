
import { BrowserRouter, withRouter, useHistory, useLocation } from "react-router-dom";

import { useContext, useState } from "react";

import "../styles/SearchFild.scss";
import { SearchContext } from "../hooks/useSearch";

function SearchFild() {

  const { searchGame, setSearchClear } = useContext(SearchContext)
  const [search, setSearch] = useState('');
  const history = useHistory();
  const location = useLocation();

  function handleSearch(event){
    event.preventDefault();
    searchGame(search)
    console.log(location)
    !location.pathname.includes("/shop") && history.push("/shop")
  }

  function verifySearchClear(event){
    setSearch(event.target.value)
    event.target.value === '' ? setSearchClear(true) : setSearchClear(false)
  }

  return (
    <BrowserRouter>
      <div className="search-fild">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search"
            name="query"
            placeholder="Search Games"
            onChange={verifySearchClear}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(SearchFild)
