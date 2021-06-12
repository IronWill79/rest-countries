export default function CountryRow({ country /*, handleSelect */ }) {
  // const selectCountry = () => {
  //   handleSelect(country);
  // }

  return (
    <tr>
      <td><a href={'/country/' + country.name}>{country.name}</a></td>
    </tr>
  );
}
