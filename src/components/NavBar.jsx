import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <SearchBar />
        <Link to="/create">
          <div>Create a recipe</div>
        </Link>
      </nav>
    </div>
  );
}
