import React, { useState } from "react";
import { connect } from "react-redux";
import { searchByName, getAllGames } from "../../actions/actions.js";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchByName, getAllGames }) => {
  const [input, setInput] = useState({
    buscar: "",
  });
  const handleInputChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };
  const handleOnClick = () => {
    searchByName(input.buscar);
    setInput({
      buscar: "",
    });
  };
  const handleOnClickAll = () => {
    getAllGames();
    setInput({
      buscar: "",
    });
  };
  return (
    <div className={styles.searchbar_div}>
      <input
        className={styles.bar_btn}
        name="buscar"
        placeholder="Buscar un juego"
        onChange={handleInputChange}
        value={input.buscar}
        autocomplete="off"
      />
      <button className={styles.btn} onClick={handleOnClick}>
        Buscar
      </button>
      <button className={styles.btn} onClick={handleOnClickAll}>
        Cargar todos
      </button>
    </div>
  );
};
export default connect(null, { searchByName, getAllGames })(SearchBar);
