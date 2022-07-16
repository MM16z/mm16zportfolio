import "./App.css";
import MainPage from "./Components/Main_Page/Mainpage";

import React, { createContext, useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./Components/Custom_Cursor/Custom_Cursor";
import AboutmePage from "./Components/Aboutme_Page/AboutmePage";
import { AnimatePresence } from "framer-motion";
import Navmenu from "./Components/Navmenu/navs";
import Appimages from "./Components/appimages";

export const Appcontext = createContext();

function App() {
  const location = useLocation();
  const circleRef = useRef(null);
  const [contactcolor, setContactcolor] = useState(null);
  const [gitSrc, setgitSrc] = useState(null);

  useEffect(() => {
    if (location.pathname.includes("/aboutme")) {
      setContactcolor("white");
      setgitSrc(require("../src/images/githublogolight.png"));
    } else {
      setContactcolor("");
      setgitSrc(require("../src/images/githublogo.png"));
    }
  }, [location]);

  return (
    <Appcontext.Provider value={{ circleRef }}>
      <div className="App-Container">
        <Appimages color={contactcolor} gitImgSrc={gitSrc} />
        <CustomCursor ref={circleRef} />
        <Navmenu />
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutme" element={<AboutmePage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
