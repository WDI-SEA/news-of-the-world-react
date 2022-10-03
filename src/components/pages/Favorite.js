import React from "react";
import { Link } from "react-router-dom";

function Landing(props) {
    console.log('infave',props)
    const favorite = props.data.map((title,id)=>{
        return <div key={id}> 
                <p ><Link to={`/display/${id}`}> {title} </Link>  </p>
            </div>
    })
    return (
        <div>
            <h1>Favorite Page</h1>
            {favorite}
        </div>
    )
}

export default Landing;