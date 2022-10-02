import React from "react";
import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'

import Display from "./Display";

function Landing(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }


    return ( 
        <div>

            <h1>Landing Page</h1>
            <label htmlFor="userInput">Search a Keyword:</label>
            <input 
                name="userInput"
                placeholder="Search Terms..."
                onChange={handleChange}
            />
            <Link to={'/display'} >
                <button>See the News</button>
            </Link>

            <Display
                input={input}
            />
        </div>
    )
}

export default Landing;