import React from "react";
import { NavBar } from "../NavBar/NavBar.jsx";
import imagen from "../../imagen/videogame.png";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container_about}>
        <h1>VIDEO JUEGOS</h1>
        <h2>PI SOY HENRY</h2>
        <h2>JOSE MARIA RESTREPO RUEDA</h2>
        <div className={styles.div_foto}>
          <img src={imagen} alt="fotografia" />
        </div>
      </div>
    </>
  );
};

export { About };
