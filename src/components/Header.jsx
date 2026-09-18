import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="brand">BookNest</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
      </nav>
    </header>
  )
}

export default Header