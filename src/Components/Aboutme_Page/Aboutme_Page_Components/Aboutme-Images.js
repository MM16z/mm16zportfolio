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
        className="Aboutme-Images-Id6-3"
        src={require("../../../images/webshowcase3.png")}
        onClick={() => {
          window.open("https://mm16z-studio.vercel.app/", "_blank");
        }}
      ></img>
      <img
        className="Aboutme-Images-Id6-2"
        src={require("../../../images/webshowcase2.png")}
        onClick={() => {
          window.open(
            "https://mm16z-webboard-nextjs-fullstack.vercel.app/",
            "_blank"
          );
        }}
      ></img>
      {/* <img
        className="Aboutme-Images-Id6-1"
        src={require("../../../images/project1.png")}
        onClick={() => {
          window.open("https://mm16z-cat-rescue.web.app/homepage", "_blank");
        }}
      ></img> */}
      <img className="Aboutme-Images-Id4-1"></img>
      <video id="igotcha" autoPlay loop muted>
        <source
          src={require("../../../images/hehe.mp4")}
          type="video/mp4"
        ></source>
      </video>
      <div className="techstack">
        <div className="language">
          <img
            src={require("../../../images/htmlicon.png")}
            id="htmlicon"
          ></img>
          <img src={require("../../../images/cssicon.png")} id="cssicon"></img>
          <img src={require("../../../images/jsicon.png")} id="jsicon"></img>
        </div>
        <div className="frameworks">
          <img
            src={require("../../../images/reacticon.png")}
            id="reacticon"
          ></img>
          <img
            src={require("../../../images/nodeicon.png")}
            id="nodeicon"
          ></img>
        </div>
        <div className="frameworks-ex">
          <img
            src={require("../../../images/nextjs.png")}
            id="expressicon"
          ></img>
        </div>
        <div className="tools">
          <img
            src={require("../../../images/vscodeicon.png")}
            id="vscodeicon"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutmeImages;
