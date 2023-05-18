import React from "react";
import { connect } from "react-redux";
import { orderBy, filterBy } from "../../actions/actions.js";
import styles from "../FilteredBy/FilteredBy.module.css";

const FilteredBy = ({ orderBy, genres, filterBy }) => {
  const handleSelect = (e) => {
    filterBy(e.target.value);
  };
  const handleSelect2 = (e) => {
    orderBy(e.target.value);
  };
  return (
    <div className={styles.container_div}>
      <select
        className={styles.selectCont}
        onChange={handleSelect}
        name=""
        id=""
      >
        <option className={styles.option} value="default">
          TODOS...
        </option>
        <optgroup className={styles.optionGroup} label="BaseDatos">
          <option className={styles.option} value="DB">
            dataBase
          </option>
        </optgroup>
        <optgroup className={styles.optionGroup} label="API">
          <option className={styles.option} value="API">
            API
          </option>
        </optgroup>
        <optgroup className={styles.optionGroup} label="GENEROS">
          {genres &&
            genres.map((g) => (
              <option key={g.name} value={g.name}>
                {g.name}
              </option>
            ))}
        </optgroup>
      </select>
      <select
        className={styles.selectCont}
        onChange={handleSelect2}
        name=""
        id=""
      >
        <option className={styles.option} value="default">
          ORDEN...
        </option>
        <optgroup className={styles.optionGroup} label="Rating">
          <option className={styles.option} value="asc">
            Mayor a Menor
          </option>
          <option className={styles.option} value="desc">
            Menor a Mayor
          </option>
        </optgroup>
        <optgroup className="optionGroup" label="Alfabetico">
          <option className={styles.option} value="A-Z">
            A - Z
          </option>
          <option className={styles.option} value="Z-A">
            Z - A
          </option>
        </optgroup>
      </select>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};
export default connect(mapStateToProps, { orderBy, filterBy })(FilteredBy);
