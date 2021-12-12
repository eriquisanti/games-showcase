/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { LaptopWindows } from "@material-ui/icons";
import { useContext } from "react";
import { SearchContext } from "../../hooks/useSearch";
import { useHistory } from "react-router-dom";

import "./styles.scss";



export default function Cards(props) {
  const { isMobile } = useContext(SearchContext);
  const history = useHistory();

  function redirectProduct(item){
    history.push(`/product?game=${item.id}`)
  }
  return (
    <div className="card" onClick={()=>{ isMobile && redirectProduct(props.item)}}>
      <div className="item-image">
        <img src={props.item.thumbnail} />
        <button className="view-game" onClick={() => redirectProduct(props.item)}>Ver Item</button>
      </div>

      <div className="item-info">
        <p className="info-name">{props.item.title}</p>
        <div className="info-dev">
          <p>{props.item.genre}</p>
        </div>
        <div className="info-platform">
          <p>{props.item.platform}</p>
          <LaptopWindows />
        </div>
      </div>
    </div>
  );
}
