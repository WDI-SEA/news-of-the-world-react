import React from "react";
import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "@mui/material";

function Display({articles, addToFavorites}) {
    const { idx } = useParams()
    return (
        <section>
            <h2>{ articles[idx].title }</h2>
            <h4>{ articles[idx].author }</h4>
            <p>{ articles[idx].content }</p>
            <Link to="/favorites">
                <Button variant="contained" onClick={() => {addToFavorites(articles[idx])}}>
                    Add to Favorites  
                </Button>
                {/* <input 
                    type="submit"  
                    value="Add to Favorites" 
                    onClick={() => {addToFavorites(articles[idx])}}
                /> */}
            </Link>

        </section>
    )
}

export default Display;