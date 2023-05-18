import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import imagen from "../../imagen/TragaMoneda.jpeg";

const Landing = () => {
  return (
    <div className={styles.MyImage}>
      <img src={imagen} alt="Imagen" />
      <Link to="/videogames">
        <button className={styles.myButton}>Insertar una moneda</button>
      </Link>
    </div>
  );
};
export { Landing };
