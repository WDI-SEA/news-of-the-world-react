import React from "react";
import { Link } from "react-router-dom";

function Landing(props) {
    console.log(props)
    const allArticle = props.data.map((title,id)=>{
        if(title){
                    return <div key={id}> 
                        <p ><Link to={`/display/${id}`}> {title} </Link>  </p>
                        <button onClick={(e)=>{
                            console.log(id)
                            props.favorite(id)}}>
                            Favorite
                        </button>
                    </div>
                }
            
    })
    return (
        <div>
            <h1>Landing Page</h1>
            <input type='text' placeholder="search by title" onChange={props.handleChange}/>
            <button>Submit</button>
            {allArticle}
        </div>
    )
}

export default Landing;