import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="header_logo">
          <a href="./index.html">
            <img 
              className="logo "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLBJMDAx40sbBZPStbLPBzy44E7PqK-YyRw&s"
              alt="logo"
            />
          </a>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page">Pages</Link>
            </li>
            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
            <li>
              <Link to="/shop">shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
};

export default Navbar;
