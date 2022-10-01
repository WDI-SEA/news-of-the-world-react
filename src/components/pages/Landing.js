import React from "react";
import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import axios from "axios";
import Display from "./Display";

function Landing() {

    const [input, setInput] = useState('politics')
    const [newsResults, setNewsResults] = useState([])

    const handleChange = e => {
        setInput(e.target.value)
    }
    useEffect(() => {
        async function fetchNews() {
            try{
                const response = await axios.get(`https://newsapi.org/v2/everything?q=halloween&from=2022-10-01&sortBy=popularity&apiKey=82db67892d414f888a9533153747fb4d`)
                console.log(response.data.articles)
                setNewsResults(response.data.articles)
            }catch(err){
                console.log(err)
            }
        }
        fetchNews()
    }, [])
    



    return (
        <div>

            <h1>Landing Page</h1>
            <label htmlFor="userInput">Search a Keyword:</label>
            <input 
                name="userInput"
                onChange={handleChange}
                
            />
            <Display

            />
        </div>
    )
}

export default Landing;