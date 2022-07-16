import "./Mainpage-Background.css";

import { useRef, useEffect } from "react";
import React from "react";

function MainPageBackground() {
  const twinkle = useRef(null);

  function starss() {
    for (let i = 0; i < 25; i++) {
      let star =
        '<div id="star" style="animation: twinkle ' +
        (Math.random() * 5 + 5) +
        "s linear " +
        (Math.random() * 5 + 5) +
        "s infinite; top: " +
        Math.random() * window.innerHeight +
        "px; left: " +
        Math.random() * window.innerWidth +
        'px;"></div>';
      twinkle.current.insertAdjacentHTML("beforeend", star);
    }
    for (var i = 0; i < 8; i++) {
      var star1 =
        '<div id="star1" style="animation: twinkle1 ' +
        (Math.random() * 5 + 5) +
        "s linear " +
        (Math.random() * 5 + 5) +
        "s infinite; top: " +
        Math.random() * window.innerHeight +
        "px; left: " +
        Math.random() * window.innerWidth +
        'px;"></div>';
      twinkle.current.insertAdjacentHTML("beforeend", star1);
    }
    for (var i = 0; i < 20; i++) {
      var star0 =
        '<div id="star0" style="top: ' +
        Math.random() * window.innerHeight +
        "px; left: " +
        Math.random() * window.innerWidth +
        'px;"></div>';
      twinkle.current.insertAdjacentHTML("beforeend", star0);
    }
    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
    for (var i = 0; i < 8; i++) {
      var meteor =
        '<div id="meteor" style="position: absolute; top: ' +
        Math.random() * window.innerHeight +
        "px; left: " +
        Math.random() * window.innerWidth +
        "px; width: 300px; height:1px; transform: rotate(-45deg); background-image: linear-gradient(to right, #fff, rgba(255,255,255,0)); animation:meteor " +
        generateRandomInteger(5, 15) +
        's linear infinite; z-index: 51;"></div>';
      twinkle.current.insertAdjacentHTML("beforeend", meteor);
    }
  }
  useEffect(() => {
    starss();
  }, []);
  return (
    <div className="MainPage-Background">
      <div id="twinkle-stars" ref={twinkle}></div>
    </div>
  );
}

export default MainPageBackground;
