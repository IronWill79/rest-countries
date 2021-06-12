export default function SearchBar({ filter, handleChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={filter}
      onChange={(e) => handleChange(e.target.value)}
      style={{ padding: 10, marginBottom: 5 }} />
  )
}