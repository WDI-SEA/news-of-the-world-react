import React from "react";


function Favorites({faves}) {
    console.log(faves)
    const faveList = faves.map((fave, i) => {
        return (
            <h2>{fave.title}</h2>

        )
    })
    return (
        <>
            <h1>Your Favorites</h1>
            {faveList}
        </>
    )
}

export default Favorites;