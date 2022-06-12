import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from "react-router-dom"
import "./SearchBar.css"

export default function SearchBar() {
    const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
    const [searchKey, setSearchKey] = useState("")
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchKey(searchKey.trim())
        navigate(`/search?q=${searchKey}`)
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSearch}>
                <label htmlFor='search'>Search:</label>
                <input
                    type="text"
                    id='search'
                    value={searchKey}
                    onChange={(e) => { setSearchKey(e.target.value) }}
                    required
                >
                </input>
            </form>
        </div>
    )
}
