import CountryRow from './CountryRow';

export default function CountryTable({ countries /*, handleSelect */ }) {
  // const selectCountry = (country) => {
  //   handleSelect(country);
  // }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {/* {countries.map((country, index) => (<CountryRow country={country} key={index} handleSelect={selectCountry} />))} */}
        {countries.map((country, index) => (<CountryRow country={country} key={index} />))}
      </tbody>
    </table>
  );
}
