import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Display from './Display'

function Landing(props) {
   

   
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type ="text"
                    name="search"
                    // onChange={props.handleChange}
                    // value={props.search} 
                    />

                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default Landing;