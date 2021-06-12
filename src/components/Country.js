export default function Country({ country /*, handleClear */ }) {
  console.log(country);
  return (
    <div>
      <img src={country.flag} />
      <p>{country.name}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Demonym: {country.demonym}</p>
    </div>
  )
}