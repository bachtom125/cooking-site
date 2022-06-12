import "./Search.css";
import React from "react";
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom"
import RecipeList from "../../components/RecipeList";

export default function Search() {
  // const url = window.location.href
  // const searchKey = 
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const searchKey = queryParams.get('q')
  console.log(searchKey)

  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return <div>
    {error && <div>{error}</div>}
    {isPending && <div>Loading content</div>}
    {data &&
      <div>
        <h2>Recipes including "{searchKey}"</h2>
        <div>
          {data.map((recipe) => {
            if (recipe.title.toLowerCase().includes(searchKey.toLowerCase()))
              return <RecipeList recipes={[recipe]} />
          })}
        </div>
      </div>}
  </div>;
}
