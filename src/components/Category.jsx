import './Category.css'

const categories = ['All', 'Fiction', 'Programming', 'Self Help', 'Fantasy']

function Category({ selected, onSelect }) {
  return (
    <div className="category" id="categories">
      <label>Categories</label>
      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            className={selected === item ? 'active' : ''}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category