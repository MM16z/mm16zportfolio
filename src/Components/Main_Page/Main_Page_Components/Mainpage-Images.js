import "./Mainpage-Images.css";

import React, { forwardRef } from "react";

const MainPageImages = forwardRef((probs, refs) => {
  return (
    <div className="Images-Items-Container">
      <img
        id="bg-item1"
        src={require("../../../images/taurus.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item1-2"
        src={require("../../../images/aquarius.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item1-3"
        src={require("../../../images/cancer.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item1-4"
        src={require("../../../images/abtract.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item1-5"
        src={require("../../../images/fullmoonglow.png")}
        draggable="false"
      ></img>
      <img
        id="bg-item2"
        src={require("../../../images/galaxy.png")}
        draggable="false"
      ></img>
    </div>
  );
});

export default MainPageImages;
