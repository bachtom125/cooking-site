import "./Home.css";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading recipes</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
