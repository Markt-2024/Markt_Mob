import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <div className="Markt-logo">
        <h1>Markt</h1>
      </div>

      <div className="profile">
        <div className="pic">
        <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
