import { Link } from "react-router-dom";
import "./Header.css";
import TheLogo from '../../Logo.jpg'

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div>
          <Link to={'/'}><img src={TheLogo} alt="Logo" /></Link>
        </div>
        <nav>
          <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
