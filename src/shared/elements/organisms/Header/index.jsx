import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-gray-50 border-b border-gray-700 shadow-sm">
      <nav className="flex justify-start">
        <ul className="flex justify-between gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
