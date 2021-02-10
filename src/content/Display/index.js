import React from 'react';

//display the API as the content axios
export const Display = props => {

    let content = props.data ? '' : 'Ruh-Roh! API or props fail!';

    return (
        <div>
            <p>{content}</p>
            <h1>no really please</h1>
        </div>
    )
};