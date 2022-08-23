import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="ul--navList">
      <li className="li--navList">
        <Link to="/">Articles</Link>
      </li>
      <li className="li--navList">
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
};

export default Nav;
