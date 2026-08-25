import "./Aboutme-Texts.css";
import { React } from "react";

function AboutmeTexts() {
  const birth = new Date(1999, 4, 16);
  const today = new Date();
  const age =
    today.getFullYear() -
    birth.getFullYear() -
    (today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
      ? 1
      : 0);

  return (
    <div className="Aboutme-Texts">
      <div className="leftpanel">
        <p id="worktxtsId3">TATAPON AUYANA</p>
        <p id="worktxtsId4">
          <p>
            ?age {"=>"} {age}
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
          <p id="aboutmebio">
            <p>I'm probably the type that likes something new ,aesthetic.</p>
            <p>like to look it in depth ,Maybe as they call it duck?</p>
            <p>Anyway, I'll give it a try :)</p>
          </p>
        </p>
        <p id="worktxtsId5">
          <p id="worktxtsId5-1">Skills</p>
          <p id="worktxtsId5-2">
            Html5,Css,Scss,Javascript/Typescript,ReactJS,NextJS,Tailwind
            <p>NodeJs,ExpressJs,Mysql,PostgreSQL // Git,Gitlab,Docker,Jira</p>
          </p>
          <p id="worktxtsId5-3">
            <p id="worktxtsId5-3-1">Intermediate</p>
            <p className="txtfontvw1" id="worktxtsId5-3-2">
              MongoDB,VueJs // Ubuntu,Nginx,GithubActions
            </p>
          </p>
          <p id="worktxtsId6">
            <p id="worktxtsId6-1">
              Learning <span id="learningdate">(25/08/2026)</span>
            </p>
            <p className="txtfontvw1" id="worktxtsId6-2">
              NestJS,Elysia
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
          {/* <span id="mywork1">Landing page/</span> */}
          <span id="mywork2">
            Fullstack next+express.js<br></br>+postgreSQL
          </span>
          <span id="mywork3">Motion website</span>

        </span>
      </div>
    </div>
  );
}

export default AboutmeTexts;
