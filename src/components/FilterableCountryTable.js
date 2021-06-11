import CountryTable from './CountryTable';
import SearchBar from './SearchBar';
import PaginationBar from './PaginationBar';

export default function FilterableCountryTable({ countries }) {
  return (
    <div>
      <SearchBar />
      <PaginationBar />
      <CountryTable countries={countries} />
    </div>
  )
}