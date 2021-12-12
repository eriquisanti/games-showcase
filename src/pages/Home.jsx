import { useContext } from "react";
import { Container } from "@material-ui/core";

import { SearchContext } from "../hooks/useSearch";

import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import Sidebar from "../components/Sidebar/Sidebar";
import SliderCarousel from "../components/SliderCarousel/SliderCarousel";
import SearchFild from "../elements/SearchFild";

import "../styles/Home.scss";

function Home() {

const  { 
    mmorpg, 
    browser, 
    pc, 
    isMobile, 
    sidebar, 
    toggleSidebar, 
    width }  = useContext(SearchContext);


  return (
      <main>
        <div className="main-container">
          <Sidebar toggleSidebar={{ toggleSidebar, sidebar }} />
          {isMobile && <HeaderMobile toggleSidebar={toggleSidebar} />}
          <section className="main-body">
            <Container>
              <SearchFild />
              <div className="main-carousel">
                <SliderCarousel
                  width={width}
                  listGames={pc}
                  title={"PC"}
                  tempSlider={5000}
                />
              </div>
              <div className="main-carousel">
                <SliderCarousel
                  width={width}
                  listGames={browser}
                  title={"Web Browser"}
                  tempSlider={2000}
                />
              </div>
              <div className="main-carousel">
                <SliderCarousel
                  width={width}
                  listGames={mmorpg}
                  title={"MMORPG"}
                  tempSlider={3000}
                />
              </div>
            </Container>
          </section>
        </div>
      </main>
  );
}

export default Home;
