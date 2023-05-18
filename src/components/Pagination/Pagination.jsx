import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ cardPerPage, totalCards, paginate, currentPage }) => {
  if (Math.ceil(totalCards / cardPerPage) < currentPage) {
    paginate(1);
  }
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pag_div}>
      <ul>
        {pageNumbers.length > 1 &&
          pageNumbers.map((p, i) =>
            p === currentPage ? (
              <li key={i}>
                <button className={styles.pag_btn} onClick={() => paginate(p)}>
                  {p}
                </button>
              </li>
            ) : (
              <li key={i}>
                <button className={styles.pag_btn} onClick={() => paginate(p)}>
                  {p}
                </button>
              </li>
            )
          )}
      </ul>
    </div>
  );
};
export { Pagination };
