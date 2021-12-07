import React from "react";

function Landing(props) {
    const allArticles = props.articles.map(v=>{
        return (
            <li onClick={()=>props.handleClick(v.title)}>
                {v.title}
            </li>
        )
    })

        const allFaves = props.faves.map((v, index)=>{
            return (
                <li key={index}>
                    {v.faves}
                </li>
            )
        })
    console.log('array', allArticles)
    return (
        <div>
        <h1>Landing Page</h1>
            <ul>{allArticles}</ul>
        
        <h1>Favorite Articles</h1>
            <ul>{allFaves}</ul>
        </div>
    )
}


export default Landing;