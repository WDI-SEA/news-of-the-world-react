import React from "react";
import SearchBar from '../SearchBar'

function Landing({popularSearches, setSearchTerms }) {
    
    return (
        <>
            <h1>Landing Page</h1>
            <SearchBar 
                popularSearches={popularSearches}
                setSearchTerms={setSearchTerms}
            />
        </>
    )
}

export default Landing;