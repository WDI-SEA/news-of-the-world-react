import React from "react";
import SearchBar from '../SearchBar'

function Landing({ handleSearchClick, popularSearches }) {
    return (
        <>
            <h1>Landing Page</h1>
            <SearchBar 
                handleSearchClick={handleSearchClick}
                popularSearches={popularSearches}
            />
        </>
    )
}

export default Landing;