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

  useEffect(() => {
    if (location.pathname.includes("/aboutme")) {
      setContactcolor("white");
    } else {
      setContactcolor("");
    }
  }, [location]);

  return (
    <Appcontext.Provider value={{ circleRef }}>
      <div className="App-Container">
        <Appimages color={contactcolor} />
        <CustomCursor ref={circleRef} />
        <Navmenu />
        <img
          id="fkingcenter"
          src={require("./images/center.png")}
          draggable="false"
        ></img>
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
