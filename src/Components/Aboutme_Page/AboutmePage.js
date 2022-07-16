import "./AboutmePage.css";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AboutmeBackground from "./Aboutme_Page_Components/Aboutme-Background";
import AboutmeImages from "./Aboutme_Page_Components/Aboutme-Images";
import AboutmeTexts from "./Aboutme_Page_Components/Aboutme-Texts";

function AboutmePage() {
  useEffect(() => {}, []);
  return (
    <motion.div
      className="Aboutme-Container"
      initial={{ x: "99%", transition: { duration: 3 } }}
      animate={{ x: "0%", transition: { duration: 3 } }}
      exit={{ x: "100%", transition: { duration: 3, ease: "easeOut" } }}
    >
      <div className="Texts-Container">
        <AboutmeTexts />
      </div>
      <div className="Images-Container">
        <AboutmeImages />
      </div>

      <AboutmeBackground />
    </motion.div>
  );
}

export default AboutmePage;
