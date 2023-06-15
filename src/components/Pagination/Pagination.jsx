import React from "react";
import style from './Pagination.module.css';

const Pagination = ({ countriesPerPage, countries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
        <ul className={style.pageGroup}>
            {
                pageNumbers.map((number) => (
                    <li key={number} className={style.pageItem}>
                        <a onClick={() => paginate(number)} href="!#" className={style.pageNumber}>{number}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  );
};

export default Pagination;
