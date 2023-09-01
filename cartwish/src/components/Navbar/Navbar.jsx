import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1 className="navbar_heading">CartWish</h1>
        <form className="navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button className="search_button">Search</button>
        </form>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
