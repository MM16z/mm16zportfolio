import "./Aboutme-Images.css";
import React from "react";

function AboutmeImages() {
  return (
    <div className="Aboutme-Images">
      <img
        className="Aboutme-Images-Id1"
        src={require("../../../images/gameboybymm16z.png")}
        draggable="false"
      ></img>
      <img
        className="Aboutme-Images-Id2"
        src={require("../../../images/mm16z.png")}
        draggable="false"
      ></img>
      <img
        className="Aboutme-Images-Id3"
        src={require("../../../images/myTAlogo.png")}
        draggable="false"
      ></img>
      <img
        className="Aboutme-Images-Id4"
        src={require("../../../images/centerline.png")}
        draggable="false"
      ></img>
      <img className="Aboutme-Images-Id4-1"></img>
       {/* <img
        className="Aboutme-Images-Id5"
        src={require("../../../images/exlinebg.png")}
        draggable="false"
      ></img> */}
      <video id="dancetilldead" autoPlay loop muted>
        <source
          src={require("../../../images/Dancetilldead.mp4")}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default AboutmeImages;
