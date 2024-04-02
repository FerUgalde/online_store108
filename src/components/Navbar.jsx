/**
 * Compinents:
 * are functions
 * start with cpital letters
 * should always return something
 *
 * are usually exported
 */

import "./Navbar.css";

import { Link } from "react-router-dom";
import DataContext from "../context/dataContext";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

function Navbar() {
  const cart = useContext(DataContext).cart;

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1>Brucker's</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shoppingList">
                Your Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <button className="btn btn-outline-light" type="button">
              {cart.length} Your Cart <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
