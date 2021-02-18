import React from 'react';

export const Landing = props => {
    return (
        <div className="search">
            Search for news topics from the Wall Street Journal:
            <input type="text" onChange={props.updateSearchTerm}></input>
            <button onClick={props.updateSearchResults} >Go!</button>
        </div>
    )
};