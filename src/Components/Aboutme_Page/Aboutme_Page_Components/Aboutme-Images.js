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
      <img
        className="Aboutme-Images-Id6-1"
        src={require("../../../images/project1.png")}
        onClick={() => {
          window.open("https://mm16z-cat-rescue.web.app/homepage", "_blank");
        }}
      ></img>
      <img className="Aboutme-Images-Id4-1"></img>
      <video id="igotcha" autoPlay loop muted>
        <source
          src={require("../../../images/hehe.mp4")}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default AboutmeImages;
