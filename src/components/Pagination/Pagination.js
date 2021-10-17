import React, { useState } from 'react';
import styles from './Pagination.module.css';

const Pagination = ({totalResults,changePage,currentPage}) => {

    const [itemsPerPage] = useState(20);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
    const handleClick = (e) => {
        e.preventDefault();
        changePage(e.target.id);
    };
  
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalResults / itemsPerPage); i++) {
      pages.push(i);
    }

    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        console.log(number,currentPage);
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={Number(currentPage) === number ? `${styles.active_page_nubmer}` : null}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });

    const handleNextbtn = () => {
       changePage(currentPage + 1);
  
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };
  
    const handlePrevbtn = () => {
       changePage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
  
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }
  
    return (
      <>
        <ul className={styles.page_numbers}>
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </>
    );
}

export default React.memo(Pagination);