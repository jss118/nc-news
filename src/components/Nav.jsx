import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="ul--navList">
      <li className="li--navList">
        <Link to="/">Articles</Link>
      </li>
    </ul>
  );
};

export default Nav;
