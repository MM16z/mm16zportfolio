import "./appimages.css";
import React from "react";
function Appimages(probs) {
  const { color, gitImgSrc } = probs;
  return (
    <div className="App-Images-Container">
      <img
        id="frame"
        // src={require("../images/frame-bg1.png")}
        draggable="false"
      ></img>
      <div id="frames"></div>
      <img
        id="bg-item3"
        src={require("../images/fblogo.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item4"
        src={require("../images/twitterlogo.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item5"
        // src={require("../images/githublogolight.png")}
        draggable="false"
        src={gitImgSrc}
      ></img>
           <img
        id="bg-item5-1"
        // src={require("../images/githublogolight.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item6"
        src={require("../images/gmaillogo.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item7-1"
        src={require("../images/center.png")}
        draggable="false"
      ></img>
      <div id="text6" style={{ color: color }}>
        {"<="} Get in touch 👋
      </div>
    </div>
  );
}

export default Appimages;
