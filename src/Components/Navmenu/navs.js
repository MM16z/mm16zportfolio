import "./navs.css";

import { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Appcontext } from "../../App";

function Navmenu(probs) {
  const textspan1 = useRef(null);
  const appdata = useContext(Appcontext);
  useEffect(() => {}, []);
  return (
    <div className="navs-Container">
      <Link to="/">
        <div
          className="homenav"
          data-text-home="HOME"
          onMouseOver={() => {
            appdata.circleRef.current.style.animation = "test1 0.5s forwards";
          }}
          onMouseOut={() => {
            appdata.circleRef.current.style.animation = "test2 1s";
          }}
        >
          HOME
        </div>
      </Link>
      <Link to="/aboutme">
        <div
          className="aboutmenav"
          data-text-me="ME!? :D"
          onMouseOver={() => {
            textspan1.current.style.color = "black";
            appdata.circleRef.current.style.background = "black";
          }}
          onMouseOut={() => {
            textspan1.current.style.color = "white";
            appdata.circleRef.current.style.background = "";
          }}
        >
          ME!
          <span id="text-spanid1" ref={textspan1}>
            ?
          </span>{" "}
          :D
        </div>
      </Link>
    </div>
  );
}

export default Navmenu;
