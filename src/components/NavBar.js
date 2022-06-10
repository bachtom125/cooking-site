import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/recipe">
          <h1>Cooking Recipes</h1>
        </Link>
        <Link to="/create">Create Recipes</Link>
      </nav>
    </div>
  );
}
