import React from "react";

function Landing({ headlines,ipaddr }) {
    const headlineList = headlines.map((hl,idx) => {
        return (
            <li id={`news-id${idx}`}><img src={hl.urlToImage} alt={hl.title} />{hl.description}</li>
        )
    })
    return (
        <>
        <div className="flex-container">
            <h3>Top news</h3>
        </div>        
        
        <ul>
           {headlineList} 
        </ul>
        </>
    )
}

export default Landing;