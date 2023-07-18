import { Outlet, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    return <Navigate replace to="/login" />;
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo Notes</Link>
          </li>
          <li>
            <Link to="/crypto">Crypto</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout} >Logout</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;
