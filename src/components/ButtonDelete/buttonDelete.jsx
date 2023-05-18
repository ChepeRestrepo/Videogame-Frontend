import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDb } from "../../actions/actions";
import styles from "./buttonDelete.module.css";

export default function ButtonDelete(id) {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: id,
  });
  function handleClick() {
    dispatch(deleteDb(input));
    return alert("Se elimino correctamente");
  }

  return (
    <button className={styles.buttonDelete} onClick={(e) => handleClick()}>
      X
    </button>
  );
}
