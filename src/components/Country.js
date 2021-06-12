export default function Country({ country /*, handleClear */ }) {
  console.log(country);
  return (
    <div className="Country">
      <img src={country.flag} alt={country.name + "'s flag"} />
      <p>{country.name}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Demonym: {country.demonym}</p>
      <p><a href={'/'}>Back to home</a></p>
    </div>
  )
}