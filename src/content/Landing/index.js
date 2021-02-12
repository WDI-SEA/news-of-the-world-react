import React from 'react';

export const Landing = props => {
    
    return (
        <div>
            <h3>{props.result.title}</h3>
            <p>{props.result.description}<a href={props.result.url}>read more</a></p>
            <img src={props.result.urlToImage}/>
        </div>
    )
};
