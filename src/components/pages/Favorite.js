import React from "react";

function Favorite(props){
    const fave = props.faves.map((fave, i) => {
        return <li key={`fave-${i}`}>{fave.title}</li>
    })
    return(
        <>
        <ol>
            {fave}
        </ol>
        </>
    )
}

export default Favorite
