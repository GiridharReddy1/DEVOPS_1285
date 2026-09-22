import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="book-search">Search Books</label>
      <input
        id="book-search"
        type="search"
        placeholder="Search by title or author..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar