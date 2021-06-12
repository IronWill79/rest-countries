import { useState } from 'react';
import CountryTable from './CountryTable';
import SearchBar from './SearchBar';
import PaginationBar from './PaginationBar';

export default function FilterableCountryTable({ countries }) {
  const [filter, setFilter] = useState('');

  const handleChange = (value) => {
    setFilter(value);
  }

  const filteredCountries = filter === '' ? countries : countries.filter(country => {
    const comparisonString = country.name.toLowerCase().slice(0, filter.length);
    return comparisonString.localeCompare(filter, 'en', { sensitivity: 'base' }) === 0;
  });

  return (
    <div>
      <SearchBar filter={filter} handleChange={handleChange} />
      <PaginationBar />
      <CountryTable countries={filteredCountries} />
    </div>
  )
}
