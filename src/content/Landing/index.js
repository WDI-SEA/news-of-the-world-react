import React from 'react';

export const Landing = props => {
    return (
        <div>
            <h1>Searchbar goes here</h1>
            <input
                placeholder="Search for articles"
                onChange={props.search}
            />

            
        </div>
    )
    
};