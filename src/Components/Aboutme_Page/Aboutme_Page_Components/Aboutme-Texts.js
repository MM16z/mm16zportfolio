import "./Aboutme-Texts.css";
import { React } from "react";

function AboutmeTexts() {
  return (
    <div className="Aboutme-Texts">
      <div className="leftpanel">
        <p id="worktxtsId3">TATAPON AUYANA</p>
        <p id="worktxtsId4">
          <p>
            ?age {"=>"} 23
            <span
              style={{
                fontSize: "0.5px",
                marginLeft: "2vw",
                fontFamily: "monospace",
                opacity: "0.5",
              }}
            >
              do we need this?
            </span>
          </p>
          <p style={{ marginTop: "-1.5vw" }}>?sex {"=>"} Male</p>
          <p style={{ marginTop: "-1.5vw" }}>Species? {"=>"} CAT!!</p>
          <p id="aboutmebio">
            <p>I'm probably the type that likes something new ,aesthetic.</p>
            <p>like to look it in depth ,Maybe as they call it duck?</p>
            <p>Anyway, I'll give it a try :)</p>
          </p>
        </p>
        <p id="worktxtsId5">
          <p id="worktxtsId5-1">Skills</p>
          <p id="worktxtsId5-2">
            Html5 ,Css ,Javascript ,ReactJs ,NodeJs // AdobeXD ,Git ,Github
          </p>
          <p id="worktxtsId5-3">
            <p id="worktxtsId5-3-1">Intermediate</p>
            <p className="txtfontvw1" id="worktxtsId5-3-2">
              Dart ,Flutter ,Jquery, Bootstrap // Figma
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
          <p id="workref">
            <span id="checkoutbio">Checkout my other work!</span>
            <p style={{ paddingTop: "2vw" }}>
              <p style={{ fontSize: "2vw" }}>
                <span className="workreficon">🎶 {"=>"} </span>
                <span>
                  <iframe
                    id="ytembed"
                    src="https://www.youtube.com/embed/x_pjxkfop_s"
                    title="Shaped - IMM0Rz Fl mobile (trap)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </span>
                <span>
                  {" "}
                  <a
                    className="workreftexts"
                    style={{
                      fontSize: "1.2vw",
                      position: "relative",
                      top: "-2vw",
                    }}
                    href="https://www.youtube.com/channel/UC72pfOuUuHXTAEEPM6jmxxw"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </span>
              </p>
              <p style={{ fontSize: "2vw", paddingTop: "1vw" }}>
                <span className="workreficon">🎨 {"=>"} </span>
                <span>
                  <a
                    className="workreftexts"
                    href="https://www.deviantart.com/imm0rz"
                    target="_blank"
                  >
                    Deviantart
                  </a>
                </span>
              </p>
            </p>
          </p>
        </span>
      </div>
    </div>
  );
}

export default AboutmeTexts;
