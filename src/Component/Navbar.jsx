import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Navbar Links */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/food" onClick={() => setMenuOpen(false)}>Food</Link>
            </li>
            <li>
              <a href="/order" onClick={() => setMenuOpen(false)}>Order</a>
            </li>
          </ul>

          {/* Hamburger Menu (Right Side) */}
          <div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
