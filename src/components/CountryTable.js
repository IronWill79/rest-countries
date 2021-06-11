import CountryRow from './CountryRow';

export default function CountryTable({countries}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (<CountryRow country={country} key={index} />))}
      </tbody>
    </table>
  );
}
