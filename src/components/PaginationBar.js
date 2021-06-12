export default function PaginationBar({ pageNumber, noMorePages, handleChange }) {
  const increment = () => {
    handleChange(pageNumber + 1);
  }

  const decrement = () => {
    handleChange(pageNumber - 1);
  }

  return (
    <div>
      <button disabled={pageNumber === 1} onClick={decrement}>Prev page</button>
      <span>{pageNumber}</span>
      <button disabled={noMorePages} onClick={increment}>Next page</button>
    </div>
  )
}