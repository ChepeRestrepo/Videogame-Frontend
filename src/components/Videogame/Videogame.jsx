import React from "react";
import { Link } from "react-router-dom";
import styles from "./Videogame.module.css";
import imagen from "../../imagen/juegoCreado.jpeg";
import { deleteDb, getAllGames } from "../../actions/actions";
import { useDispatch } from "react-redux";
import ButtonDelete from "../ButtonDelete/buttonDelete";

const Videogame = (props) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteDb(props.id));
    dispatch(getAllGames());
    return alert("Se elimino correctamente");
  }
  return (
    <div className={styles.container_game}>
      <ButtonDelete id={handleClick} />
      <div className={styles.title_game}>{props.name}</div>
      <div className={styles.game_div}>
        <button>
          {props.image ? (
            <Link to={`/videogame/${props.id}`}>
              <img
                src={`${props.image}`}
                alt="Videogame"
                className={styles.Img}
              />
            </Link>
          ) : (
            <img src={imagen} alt="Videogame" className={styles.Img} />
          )}
        </button>
      </div>
      <div className={styles.infoRating}>
        {
          <p>
            <strong>Rating</strong>: ★{`${props.rating}`}
          </p>
        }
      </div>
      <div className={styles.infoContGenres}>
        {
          <p>
            <strong>Genero : </strong>{" "}
            {`${
              typeof props.genres === "string"
                ? props.genres
                : props.genres.join(", ")
            }`}
          </p>
        }
      </div>
      <div className={styles.div_button}>
        {props.id && (
          <Link to={`/videogame/${props.id}`}>
            <button className={styles.Link}>Detalles</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export { Videogame };
