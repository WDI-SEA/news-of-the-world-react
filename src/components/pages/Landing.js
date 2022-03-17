import React from "react";
import SearchBar from '../SearchBar'

function Landing({popularSearches }) {
    return (
        <>
            <h1>Landing Page</h1>
            <SearchBar 
                popularSearches={popularSearches}
            />
        </>
    )
}

export default Landing;