import { Link } from 'react-router-dom'
const Header: React.FC = () => {
  return (
    <header className="navbar bg-black sticky top-0 z-50">
      <div className="flex-1 ">
        <Link to="/" className="btn  text xl ">
          {' '}
          Roomeit
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/main-roomeit">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
