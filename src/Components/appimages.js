import "./appimages.css";
import React from "react";
function Appimages(probs) {
  const { color } = probs;
  return (
    <div className="App-Images-Container">
      <img
        id="frame"
        draggable="false"
      ></img>
      <img
        id="bg-item3"
        src={require("../images/fblogo.png")}
        draggable="false"
        onClick={() => {
          window.open("https://www.facebook.com/itmemor.awesome/", "_blank");
        }}
      ></img>
      <img
        id="bg-item4"
        src={require("../images/twitterlogo.png")}
        draggable="false"
        onClick={() => {
          window.open("http://google.com", "_blank");
        }}
      ></img>
      <img
        id="bg-item5"
        src={require("../images/githublogolight.png")}
        draggable="false"
        onClick={() => {
          window.open("https://github.com/MM16z", "_blank");
        }}
      ></img>
      <img
        id="bg-item6"
        src={require("../images/gmaillogo.png")}
        draggable="false"
        onClick={() => {
          window.open("mailto:imm0rz55160@gmail.com", "_blank");
        }}
      ></img>
      <div id="text6" style={{ color: color }}>
        {"<="} Get in touch 👋
      </div>
    </div>
  );
}

export default Appimages;
