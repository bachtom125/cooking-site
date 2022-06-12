import "./Recipe.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams()
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return <div>
    {error && <div>{error}</div>}
    {isPending && <div>Loading content</div>}
    {data &&
      data.map(recipe => (
        (recipe.id === id &&
          <div className="recipe">
            <h3>{recipe.title}</h3>
            <div>Takes {recipe.cookingTime} to cook</div>
            <div>Ingredients:
              <ul>
                {recipe.ingredients.map(ingre => (<li>{ingre}</li>))}
              </ul>
            </div>
            <p className="method">{recipe.method}</p>
          </div>
        )))
    }
  </div>;
}
