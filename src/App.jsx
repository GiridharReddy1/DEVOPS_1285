<<<<<<< HEAD
import {useState} from "react";import Header from "./components/Header";import ProductList from "./components/ProductList";import Cart from "./components/Cart";import Footer from "./components/Footer";const products=[{id:1,name:"Laptop",price:55000,image:"https://picsum.photos/300/200?1"},{id:2,name:"Headphones",price:2500,image:"https://picsum.photos/300/200?2"},{id:3,name:"Smartphone",price:22000,image:"https://picsum.photos/300/200?3"}];export default function App(){const[cart,setCart]=useState([]);const add=p=>setCart(c=>{const e=c.find(i=>i.id===p.id);return e?c.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i):[...c,{...p,qty:1}]});const rem=id=>setCart(c=>c.flatMap(i=>i.id===id?(i.qty>1?[{...i,qty:i.qty-1}]:[]):[i]));const inc=id=>setCart(c=>c.map(i=>i.id===id?{...i,qty:i.qty+1}:i));const dec=id=>setCart(c=>c.flatMap(i=>i.id===id?(i.qty>1?[{...i,qty:i.qty-1}]:[]):[i]));const clear=()=>setCart([]);const total=cart.reduce((s,i)=>s+i.price*i.qty,0);return <div className="app"><Header count={cart.reduce((s,i)=>s+i.qty,0)}/><h2>Welcome to Online Shopping</h2><ProductList products={products} add={add}/><Cart cart={cart} rem={rem} inc={inc} dec={dec} clear={clear} total={total}/><Footer/></div>}
=======
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
>>>>>>> 5d77200503228a0fc251a18c61128ff15eb4a615
