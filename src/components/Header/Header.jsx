import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl mr-12">Auth System</a>
      <div>
        <Link className="btn btn-ghost normal-case text-xl " to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl " to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl " to="/register">
          Register
        </Link>
        {user && (
          <div>
            <Link className="btn btn-ghost normal-case text-xl ">
              {user.email}
            </Link>
            <Link
              onClick={handleSignOut}
              className="btn btn-ghost normal-case text-xl "
            >
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
