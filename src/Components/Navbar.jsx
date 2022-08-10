// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="bg-dark text-light">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
