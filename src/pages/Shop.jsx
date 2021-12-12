import { useContext } from "react";
import { SearchContext } from "../hooks/useSearch";
import { Container } from "@material-ui/core";
import Cards from "../components/Cards/Cards";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchFild from "../elements/SearchFild";

import "../styles/Shop.scss";


export default function Shop() {
  
 

  const { 
      listGamesSearch, 
      isMobile, 
      sidebar, 
      toggleSidebar } = useContext(SearchContext);  

  return (
    <main>
      <div className="main-container">
        <Sidebar toggleSidebar={{ toggleSidebar, sidebar }} />
        {isMobile && <HeaderMobile toggleSidebar={toggleSidebar} />}
        <section className="main-body">
          <Container>
            <SearchFild />
            <div className="box-items">
              {listGamesSearch.length !== 0 ?
              listGamesSearch.map((item) => {
                return (
                  <div key={item.id}>
                    <Cards item={item} />;
                  </div>
                ) 
              }) : 
                <div className="aviso-search">
                  <p><span>Nenhum resultado encontrado </span><span>😕</span></p>
                </div>
               }
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}
