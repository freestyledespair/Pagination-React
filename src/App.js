import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Components/Spinner/Spinner';
import { GET_ALL_COUNTRIES } from './api/index';
import Countries from './Components/Countries/Countries';
import Paginator from './Components/Pagination/Paginator';

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)


  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)




  useEffect(() => {
    setIsLoading(true)
    axios.get(GET_ALL_COUNTRIES)
      .then(res => {
        console.log(res.data);
        setCountries(res.data)
      })
      .catch(err => console.error(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  const paginate = (number) => {
    setCurrentPage(number)
    window.scrollTo(0, 0)
  }

  const prev = () => setCurrentPage(prev => prev - 1)
  const next = () => setCurrentPage(prev => prev + 1)


  return (
    <div>
      <h1 style={{ color: "green" }}>Countries</h1>
      <Countries countries={currentCountries} isLoading={isLoading} />
      <button disabled={currentPage === 1 ? true : false} onClick={prev}>Prev</button>
      <Paginator countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} />
      <button disabled={currentPage === countries.length / countriesPerPage ? true : false} onClick={next}>Next</button>
    </div >
  );
};

export default App;