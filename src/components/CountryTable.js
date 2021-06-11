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
        {countries.map(country => (<CountryRow country={country} />))}
      </tbody>
    </table>
  );
}
