import '../styles/ButtonToggleSidebar.scss';

export default function ButtonToggleSidebar(props) {
    return (
        <button className="button" onClick={props.event}>
          <div className="lines">
            <div className="line-button"></div>
            <div className="line-button"></div>
            <div className="line-button"></div>
          </div>
        </button>
    );
}