import React from "react";
import { Link } from "react-router-dom"



function Landing() {
    return (
        <>
            <h1>Welcome to the News of the World </h1>
            <h1>By: PIPBOY</h1>
            <p>this is an app that utilizes the NewsApi to give you the news around the world.</p>
            
            <Link to="/display">Go to Articles</Link>
        </>
    )
}

export default Landing;