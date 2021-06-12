import { useState } from 'react';
import CountryTable from './CountryTable';
import SearchBar from './SearchBar';
import PaginationBar from './PaginationBar';

export default function FilterableCountryTable({ countries, handleSelect }) {
  const [filter, setFilter] = useState('');

  const handleChange = (value) => {
    setPageNumber(1);
    setFilter(value);
  }

  const filteredCountries = filter === '' ? countries : countries.filter(country => {
    const comparisonString = country.name.toLowerCase().slice(0, filter.length);
    return comparisonString.localeCompare(filter, 'en', { sensitivity: 'base' }) === 0;
  });

  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (number) => {
    setPageNumber(number);
  }

  const paginatedCountries = filteredCountries.slice((pageNumber - 1) * 10, pageNumber * 10);

  let noMorePages = false;

  if (pageNumber * 10 >= filteredCountries.length) {
    noMorePages = true;
  }

  const handleCountrySelect = (country) => {
    handleSelect(country);
  }

  return (
    <div>
      <SearchBar filter={filter} handleChange={handleChange} />
      <PaginationBar pageNumber={pageNumber} noMorePages={noMorePages} handleChange={handlePageNumber} />
      <CountryTable countries={paginatedCountries} handleSelect={handleCountrySelect} />
    </div>
  )
}
