import "./Mainpage-Texts.css";
import React from "react";

function MainpageTexts() {
  return (
    <div className="Texts">
      <div id="text">
        <span id="Sharp01letter">#</span>{" "}
        <span id="txtsId0">
          <span id="txtsId0-1">REPOLEV</span>
          <span id="E01letter">E</span>
          <span id="Dletter">
            D{/* D<span id="Dborder"></span> */}
          </span> BEW{" "}
          {/* <span id="txtsId0extra">
            SI<p>GN</p>
            <p>ER</p>
          </span> */}
        </span>
        <span id="txtsId0extra">
          <span id="S01letter">S</span>
          <span id="Iletter">I</span>
          <p>
            <span id="N01letter">N</span>
            <span id="Gletter">G</span>
          </p>
          <p>
            <span id="E02letter">E</span>
            <span id="Rletter">
              R<span id="Dborder"></span>
            </span>
          </p>
        </span>
        <div id="txtsection2">
          <span id="txtsId1" texttest1="S"></span>
          <span id="txtsId2" texttest2="E"></span>
          <span className="txtsId3">L</span>
          <span id="txtsId4"></span>{" "}
          <span id="txtsId5" id5fristletter="E"></span>
          <span id="txtsId6"></span>
          <span id="txtsId7">
            U<span id="txtsId7extra">UX/</span>
            <span id="txtsId7extra-2">I</span>
          </span>
          <span className="txtsId8">G</span>
          <span className="txtsId9">H</span>
          <span className="txtsId10">T</span>
        </div>
      </div>
      <div id="text4">
        <span id="txtsId13"></span>
        <p id="txtsId14">you! :)</p>
        <p id="txtsId15">
          <p style={{ marginLeft: "-1vw" }}>
            Hi again, My name is Tatpon Auyana,
          </p>
          <p>
            I'm a junior <span id="questionmark">?</span>{" "}
            <span id="Sharpletter">
              #
              <img
                id="icon01"
                src={require("../../../images/icon01.png")}
              ></img>
            </span>
          </p>
          <p style={{ left: "-5vw" }}>
            I love/interest in website developer, game developer
          </p>
          <p style={{ left: "2.3vw", top: "0.3vw" }}>Based in Thailand , Nan</p>
          <p id="checkout">
            In the upper right corner there is a button about something?. Maybe
            you should try exploring?!
          </p>
        </p>
        <p
          id="txtsId16"
          style={{
            left: "-5vw",
            top: "22vw",
            fontSize: "1.15vw",
            margin: 0,
            position: "absolute",
          }}
        >
          CLICK ON <span style={{ color: "cyan" }}>ME!?</span> (RIGHT SIDE) FOR
          MORE INFOMATION :) {"=>"}
        </p>
      </div>
      <p id="lorem">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </p>
    </div>
  );
}

export default MainpageTexts;
