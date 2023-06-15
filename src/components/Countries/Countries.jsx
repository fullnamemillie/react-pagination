import React from "react";
import style from "./Countries.module.css";

const Countries = ({ countries, loading }) => {
    if (loading) {
      return <h2 className={style.load}>Loading...</h2>;
    }

  return (
    <ul className={style.listGroup}>
      {countries.map((country, i) => (
        <li key={i} className={style.listItem}>
          {country.name?.common}
          <img className={style.img} src={country.flags.png} alt="flag" />
        </li>
      ))}
    </ul>
  );
};

export default Countries;
