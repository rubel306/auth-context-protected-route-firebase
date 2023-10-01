import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl mr-12">Login System</a>
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
      </div>
    </div>
  );
};

export default Header;
