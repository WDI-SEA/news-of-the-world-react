import React from "react";
import { Link} from 'react-router-dom'
import { useState } from "react";

import Favorites from "./Favorites"

function Landing({faves, setFaves, setInput}) {

    
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

            <Favorites 
                faves={faves}
                setFaves={setFaves}
            />
        </div>
    )
}

export default Landing;