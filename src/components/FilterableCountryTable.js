import { useState } from 'react';
import CountryTable from './CountryTable';
import SearchBar from './SearchBar';
import PaginationBar from './PaginationBar';

export default function FilterableCountryTable({ countries }) {
  const [filter, setFilter] = useState('');

  const handleChange = (value) => {
    setFilter(value);
  }

  return (
    <div>
      <SearchBar filter={filter} handleChange={handleChange} />
      <PaginationBar />
      <CountryTable countries={countries.filter(country => country.name.toLowerCase().startsWith(filter))} />
    </div>
  )
}