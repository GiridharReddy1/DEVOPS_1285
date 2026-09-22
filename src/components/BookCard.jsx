import Rating from './Rating'
import './BookCard.css'

function BookCard({ book }) {
  const buyNow = () => {
    alert(`Thanks for choosing "${book.title}"!`)
  }

  const viewDetails = () => {
    alert(`${book.title}\nAuthor: ${book.author}\nCategory: ${book.category}\nRating: ${book.rating}/5`)
  }

  return (
    <article className="book-card">
      <div className="book-cover">
        <span>BOOK</span>
        <strong>{book.title}</strong>
      </div>

      <div className="book-info">
        <span className="category-tag">{book.category}</span>
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <Rating value={book.rating} />
        <div className="card-bottom">
          <strong>₹{book.price}</strong>
          <div className="actions">
            <button onClick={viewDetails} className="secondary">View Details</button>
            <button onClick={buyNow} className="primary">Buy Now</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BookCard