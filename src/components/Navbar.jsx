import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Navbar = ({
  className = "",
  title = "Dr. Crypto",
  icon = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cryptocurrency_Logo.svg",
}) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="container">
        <Link className="navbar_title">
          <img src={icon} alt={title} className="navbar_title-icon" />
          <h1 className="navbar_title-text">{title}</h1>
        </Link>

        <SearchBox />
      </div>
    </nav>
  );
};

export default Navbar;
