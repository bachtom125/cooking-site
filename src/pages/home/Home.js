import "./Home.css";
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading recipes</p>}
      {data && data.map((recipe) => <div key={recipe.id}>{recipe.title}</div>)}
    </div>
  );
}
