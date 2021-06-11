import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => {
        setIsLoaded(true);
        setCountryList(res);
      }, err => {
        setIsLoaded(true);
        setError(err);
      })
  }, []);

  return (
    <div className="App">
      {error && (<p>Error: {error.message}</p>)}
      {!isLoaded && (<p>Loading...</p>)}
      {isLoaded && (
        <>
          <header className="App-header">
            <h1>Tell me about a Country</h1>
            <p>
              Select a country from the list below to see the name, flag, population and demonym
            </p>
          </header>
          <div>
            {countryList.map(country => (<p>{country.name}</p>))}
          </div>
        </>
      )}
    </div>
  );
}
