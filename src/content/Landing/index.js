import React from 'react';

export const Landing = props => {
    console.log(props.search)
    return (
        <div>
            <h1>News Of The World</h1>
            <h2>Your Place For Top Stories</h2>
            <input
                placeholder="Search for articles"
                onChange={props.search}
            />
        </div>
    )
    
};