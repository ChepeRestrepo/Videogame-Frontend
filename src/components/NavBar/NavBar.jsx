import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar_div}>
      <NavLink to="/">
        <button>Intro</button>
      </NavLink>
      <NavLink to="/videogames">
        <button>VideoJuegos</button>
      </NavLink>
      <NavLink to="/crearjuego">
        <button>Crear Juego</button>
      </NavLink>
      <NavLink to="/about">
        <button>Autor</button>
      </NavLink>
    </div>
  );
};

export { NavBar };
