import BookCard from './BookCard'
import './BookList.css'

function BookList({ books }) {
  return (
    <div className="book-list" id="books">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList