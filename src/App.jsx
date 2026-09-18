import { useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Category from './components/Category'
import BookList from './components/BookList'
import Footer from './components/Footer'

const books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 399, category: 'Fiction', rating: 4.7 },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 499, category: 'Self Help', rating: 4.8 },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', price: 699, category: 'Programming', rating: 4.6 },
  { id: 4, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', price: 799, category: 'Programming', rating: 4.8 },
  { id: 5, title: 'Ikigai', author: 'Héctor García', price: 299, category: 'Self Help', rating: 4.5 },
  { id: 6, title: 'Harry Potter', author: 'J. K. Rowling', price: 599, category: 'Fantasy', rating: 4.9 }
]

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || book.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <p className="eyebrow">DISCOVER • READ • GROW</p>
          <h1>Welcome to Online Book Store</h1>
          <p>Find your next great book from our carefully selected collection.</p>
        </section>

        <section className="controls">
          <SearchBar value={search} onChange={setSearch} />
          <Category selected={category} onSelect={setCategory} />
        </section>

        <section className="results">
          <div className="results-heading">
            <h2>Available Books</h2>
            <span>{filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}</span>
          </div>

          {filteredBooks.length > 0 ? (
            <>
              <p className="message success">Book Found</p>
              <BookList books={filteredBooks} />
            </>
          ) : (
            <p className="message empty">No Books Found</p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App