import { React, useEffect } from "react";
import { connect } from "react-redux";
import { getVideogameDetail } from "../../actions/actions";
import { NavBar } from "../NavBar/NavBar.jsx";
import photo from "../../imagen/juegoCreado.jpeg";
import { NavLink, Link } from "react-router-dom";
import styles from "./GameDetails.module.css";

function GameDetails(props) {
  const { getVideogameDetail, gameDetails } = props;
  const { idVideogame } = props.match.params;

  // me carga los details del juego
  useEffect(() => {
    getVideogameDetail(idVideogame);
  }, [getVideogameDetail, idVideogame]);

  return (
    <div className={styles.container_detail}>
      <NavBar />
      <div className={styles.details_div}>
        {gameDetails ? (
          <div>
            <h3 className={styles.title}>{gameDetails.name}</h3>
            {gameDetails.background_image ? (
              <div className={styles.div_img}>
                <img src={gameDetails.background_image} alt="Videogame"></img>
              </div>
            ) : (
              <div className={styles.div_img}>
                <Link to={`/videogame/${props.id}`}>
                  <img src={photo} alt="Videogame"></img>
                </Link>
              </div>
            )} 
            {
              <p>
                <strong>Release Date</strong>:{" "}
                {`${gameDetails.releaseDate || "None"}`}
              </p>
            }
            <p>
              <strong>Rating</strong>: ★ {`${gameDetails.rating}`}
            </p>
            {gameDetails.description &&
            gameDetails.genres &&
            gameDetails.platforms ? (
              <div className={styles.div_descr}>
                {
                  <p className={styles.description}>
                    {gameDetails.description.replace(/(<([^>]+)>)/gi, "")}
                  </p>
                }
                {
                  <p>
                    <strong>Genres</strong>:{" "}
                    {`${gameDetails.genres.join(", ")}`}
                  </p>
                }
                {
                  <p>
                    <strong>Platforms</strong>:{" "}
                    {`${
                      typeof gameDetails.platforms === "string"
                        ? gameDetails.platforms
                        : gameDetails.platforms.join(", ")
                    }`}
                  </p>
                }
                <NavLink to="/videogames">
                  <button>Volver</button>
                </NavLink>
              </div>
            ) : (
              <h1>Cargando</h1>
            )}
          </div>
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetails: state.gameDetails,
  };
};

export default connect(mapStateToProps, { getVideogameDetail })(GameDetails);
