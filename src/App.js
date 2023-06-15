import "./App.css";
import React from "react";
import axios from "axios";
import Countries from "./components/Countries/Countries";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [countriesPerPage] = React.useState(10);

  // React.useEffect(() => {
  //   const getCountries = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://restcountries.com/v3.1/all");
  //     setCountries(res.data);
  //     setLoading(false);
  //   };

  //   getCountries()
  // }, []);

  React.useEffect(() => {
    setLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setLoading(false);
    });
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;

  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="wrapper">
      <h1 className="firstPage">Countries</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination paginate={paginate} countriesPerPage={countriesPerPage} countries={countries.length} />
    </div>
  );
}

export default App;
