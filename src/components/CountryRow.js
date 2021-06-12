export default function CountryRow({ country, handleSelect }) {
const selectCountry = () => {
  handleSelect(country);
}

  return (
    <tr>
      <td><button onClick={selectCountry}>{country.name}</button></td>
    </tr>
  );
}
