import { Container } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { SidebarData } from "../../elements/SidebarData";
import { Link } from "react-router-dom";

import logoImg from '../../assets/logo.png'

import "./styles.scss";

export default function Sidebar(props) {
  return (
    <>
      <div
        id="overlay"
        className={props.toggleSidebar.sidebar ? "overlay open" : "overlay"}
        onClick={props.toggleSidebar.toggleSidebar}
      ></div>
      <div
        id="sidebar"
        className={props.toggleSidebar.sidebar ? "sidebar open" : "sidebar"}
      >
        <div className="close">
          <button className="button-close">
            <Close
              sx={{ fontSize: 16, fontWeight: "bold" }}
              onClick={props.toggleSidebar.toggleSidebar}
            />
          </button>
        </div>
        <div className="fixed">
          <Container>
            <div className="container">
              <header className="sidebar-header">
                <div className="logo">
                  <img src={logoImg} alt="Logo"/>
                </div>
              </header>
              <main className="sidebar-body">
                <ul className="sidebar-list">
                  {SidebarData.map((item, index) => (
                    <Link key={index} to={item.path} className="links">
                      <li className="items">
                        <div>
                          <span className="text">{item.name}</span>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </main>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
