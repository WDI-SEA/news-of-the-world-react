import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Display from './Display'

function Landing(props) {
const [search, setSearch] = useState(" ") 

const api_key= process.env.REACT_APP_API_KEY
const searchUrl =`https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`

//   need a fxn to handle search input
const handleChange = (e =>{
    setSearch(e.target.value)
})

// fxn to call API and enter user query
useEffect = (()=>{
    async function searchResults(){
        try{
            const response = await axios.get(searchUrl)
            searchResults=(response.data.articles)
        }catch(error){
            console.log(error)
        }
      }
      searchResults()
    }, [])


    return (
        <div>
            //form for user to enter search query
            <form> 
                <input type ="text"
                placeholder="Enter your search here..."
                name="search"
                // onChange={handleChange}
                value={search} 
                />

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Landing;