import React from "react";
import { NavLink  } from "react-router-dom";

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
              <NavLink to="/">Home</NavLink>
            </li> 
            <li>
              <NavLink to="/aboutus">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/shop">shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;



