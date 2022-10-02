import Display from "./Display";


import { useState } from "react";
import { Link } from "react-router-dom"
const axios = require("axios")




function Landing(props) {
    

    return (
        <div>
           
            <h1>WELCOME TO CHANNEL 5 NEWS!</h1> 
            <label htmlFor="news-search">Search for News:</label>
        
            <form onSubmit={props.userSearch}>
                <input 
                    id="news-search"
                    type="text"
                    value={props.search}
                    onChange={props.handleChange}
                ></input>
                <Link to={"/display"}><button type="submit">Submit</button></Link>
            </form>
            
                
        </div>
    )
}

export default Landing;