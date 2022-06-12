import "./Create.css";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Create() {
  const [title, setTitle] = useState("")
  const [method, setMethod] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [tempIng, setTempIng] = useState("")
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()
  const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST")

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + " minutes" })
  }

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])

  const handleAdd = (e) => {
    e.preventDefault()
    if (!ingredients.includes(tempIng))
      setIngredients((curIng) => (setIngredients([...curIng, tempIng])))
    setTempIng("")
    ingredientInput.current.focus()
  }

  return (
    < div className="create">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            type="text"
            onChange={(e) => (setTitle(e.target.value))}
            value={title}
            required>
          </input>
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={((e) => (setTempIng(e.target.value)))}
              value={tempIng}
              ref={ingredientInput}>
            </input>
            <button onClick={handleAdd}>Add</button>
          </div>
        </label>
        {/* <p>Current ingredients: {ingredients.map((ing) => (<em key={ing}>{ing}, </em>))}</p> */}

        <label>
          <span>Recipe method</span>
          <input
            type="text"
            onChange={(e) => (setMethod(e.target.value))}
            value={method}
            required>
          </input>
        </label>

        <label>
          <span>Cooking time (minutes)</span>
          <input
            type="number"
            onChange={(e) => (setCookingTime(e.target.value))}
            value={cookingTime}
            required>
          </input>
        </label>

        <button className="btn">
          Submit
        </button>
      </form >
    </div >
  )
}
