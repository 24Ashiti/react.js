import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UseAuth } from "../Pages/Auth";

const Navbar = () => {

  const navStyle = ({isActive}) => {
    return{
      color:isActive ? "white" : "black"
    }
  }

  const auth = UseAuth()

  return (
    <div>
      <header>
        <div className="header_logo">
          <Link to="/">
          <img className="logo" src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="logo"/>
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li><NavLink style={navStyle} to="/">Home</NavLink></li>
            <li><NavLink style={navStyle} to="aboutus">AboutUs</NavLink></li>
            <li><NavLink style={navStyle} to="contact">Contact</NavLink></li>
            <li><NavLink style={navStyle} to="shop">shop</NavLink></li>
            <li><NavLink style={navStyle} to="blog">Blog</NavLink></li>
            <li><NavLink style={navStyle} to="product">Product</NavLink></li>
            <li><NavLink style={navStyle} to="user">User</NavLink></li>
            <li><NavLink style={navStyle} to="profile">Profile</NavLink></li>
            {
              !auth.user ? <li><NavLink style={navStyle} to="login">Login</NavLink></li>:<li><NavLink style={navStyle} to="profile">{auth.user}</NavLink></li>
            }
          </ul>
        </nav>
      </header>
      
    </div>
  );
};

export default Navbar;
