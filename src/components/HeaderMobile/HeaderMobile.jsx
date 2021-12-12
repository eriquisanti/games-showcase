
import { Container } from "@material-ui/core";
import ButtonToggleSidebar from "../../elements/ButtonToggleSidebar";

import logoImg from '../../assets/logo.png'

import "./styles.scss";

export default function HeaderMobile(props) {
    
  return (
    <Container >
      <header className="header-mobile">
        <div className="container">
          <ButtonToggleSidebar event={props.toggleSidebar}/>
          <div className="logo">
            <img src={logoImg} alt="Logo"/>
          </div>
        </div>
      </header>
    </Container>
  );
}
