export default function CountryRow({ country, index }) {
  return (
    <tr key={index}>
      <td>{country.name}</td>
    </tr>
  );
}
