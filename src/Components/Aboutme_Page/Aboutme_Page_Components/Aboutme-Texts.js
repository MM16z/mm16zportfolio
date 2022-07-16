import "./Aboutme-Texts.css";
import { React } from "react";

function AboutmeTexts() {
  return (
    <div className="Aboutme-Texts">
      <div className="leftpanel">
        <p id="worktxtsId3">TATAPON AUYANA</p>
        <p id="worktxtsId4">
          <p>?age {"=>"} 23</p>
          <p style={{ marginTop: "-1.5vw" }}>?sex {"=>"} Male</p>
        </p>
        <p id="worktxtsId5">
          <p id="worktxtsId5-1">Skills</p>
          <p id="worktxtsId5-2">
            Html5 ,Css ,Javascript ,ReactJs ,Jquery // AdobeXD ,Git
          </p>
          <p id="worktxtsId5-3">
            <p id="worktxtsId5-3-1">
              Intermediate<span style={{ fontSize: "0.75vw" }}> (Skills)</span>
            </p>
            <p className="txtfontvw1" id="worktxtsId5-3-2">
              Dart ,Flutter ,Bootstrap // Figma
            </p>
          </p>
          <p id="worktxtsId5-4">
            Education
            <p className="txtfontvw1">Machine Tool Technology</p>
          </p>
        </p>
      </div>
      <div className="rightpanel">
        <span id="works">
          <p id="worktxtsId1">WORKS</p>
          <p id="worktxtsId2">Incomimg....</p>
        </span>
      </div>
    </div>
  );
}

export default AboutmeTexts;
