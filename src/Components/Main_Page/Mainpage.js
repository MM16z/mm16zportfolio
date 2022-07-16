import "./Mainpage.css";

import React, { useEffect, useRef } from "react";
import MainPageBackground from "./Main_Page_Components/Mainpage-Background";
import MainPageImages from "./Main_Page_Components/Mainpage-Images";
import Navmenu from "../Navmenu/navs";
import { motion } from "framer-motion";
import AboutmePage from "../../Components/Aboutme_Page/AboutmePage";
import { Route, Routes } from "react-router-dom";
import MainpageTexts from "./Main_Page_Components/Mainpage-Texts";

function MainPage() {
  const fullmoonBGRef = useRef(null);

  // const [myInfoData, setmyInfoData] = useState([]);
  // const myInfoApi = async () => {
  //   const response = await fetch("https://gitconnected.com/v1/portfolio/mm16z");
  //   const data = await response.json();
  //   setmyInfoData(data);
  // };

  useEffect(() => {
    // myInfoApi();
  }, []);

  useEffect(() => {});

  return (
    <motion.div
      className="MainPage-Container"
      initial={{ x: "-99%", transition: { duration: 3 } }}
      animate={{ x: "0%", transition: { duration: 3, ease: "easeOut" } }}
      exit={{ x: "-100%", transition: { duration: 3 } }}
    >
      <div className="Texts-Container">
        <MainpageTexts />
      </div>
      {/* <Navmenu /> */}
      <div className="Images-Container">
        <MainPageImages ref={fullmoonBGRef} />
      </div>
      <div className="MainPage-Background-Container">
        <MainPageBackground />
      </div>
    </motion.div>
  );
}

export default MainPage;
