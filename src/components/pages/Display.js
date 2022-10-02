import React from "react";
import { useState } from "react";

const axios = require("axios")



function Display(props) {
    const articleDisplay = props.articles.map((article, i) => {
        return (
            <div key={`article${i}`}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
            </div>
            
            )
    })

    return (
        <div>
           
            <h1>Display Page</h1>
            {articleDisplay}
            
            
        </div>
        
        
    )
}

export default Display;