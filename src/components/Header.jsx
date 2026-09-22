<<<<<<< HEAD
export default ({count})=><div className="header"><h1>Online Shopping</h1><p>Cart Items: {count}</p></div>;
=======
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
>>>>>>> 5d77200503228a0fc251a18c61128ff15eb4a615
