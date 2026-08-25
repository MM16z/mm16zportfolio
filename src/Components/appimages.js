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
        <a
          id="resumeBtn"
          href="https://drive.google.com/file/d/1swQMBpx8P3gFjD4cXZN6R5lUTficyMTx/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          {"<= "}Resume
        </a>
      </div>
    </div>
  );
}

export default Appimages;
