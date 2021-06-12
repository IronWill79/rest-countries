import { useEffect, useState } from 'react';
import FilterableCountryTable from './components/FilterableCountryTable';
import CountryListSort from './functions/CountryListSort';
import Country from './components/Country';
import './App.css';

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // If homepage, load all country names
    if (window.location.pathname === '/') {
      fetch('https://restcountries.eu/rest/v2/all?fields=name')
        .then(res => res.json())
        .then(res => {
          setIsLoaded(true);
          setCountryList(res.sort(CountryListSort));
        }, err => {
          setIsLoaded(true);
          setError(err);
        })
    }
    // If path = /country/, get country name from end of 
    else if (window.location.pathname.startsWith('/country/')) {
      const country = window.location.pathname.replace('/country/', '');
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(res => res.json())
        .then(res => {
          setIsLoaded(true);
          setSelectedCountry(res[0]);
        }, err => {
          setIsLoaded(true);
          setError(err);
        })
    }
  }, []);

  // const handleCountrySelection = (country) => setSelectedCountry(country);

  // const handleClear = () => setSelectedCountry(null);

  return (
    <div className="App">
      {error && (<p>Error: {error.message}</p>)}
      {!isLoaded && (<div className="lds-dual-ring"></div>)}
      {(isLoaded && !selectedCountry) && (
        <>
          <header className="App-header">
            <h1>Tell me about a Country</h1>
            <p>
              Select a country from the list below to see the name, flag, population and demonym
            </p>
          </header>
          <div className="Country-table">
            <FilterableCountryTable countries={countryList} />
            {/* <FilterableCountryTable countries={countryList} handleSelect={handleCountrySelection} /> */}
          </div>
        </>
      )}
      {selectedCountry && (
        <div className="Country-table">
          <Country country={selectedCountry} />
          {/* <Country country={selectedCountry} handleClear={handleClear} /> */}
        </div>
      )}
    </div>
  );
}
