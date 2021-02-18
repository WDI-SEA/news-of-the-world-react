import React from 'react';
import { Display } from '../Display';

export const Landing = props => {
    return (
        <div className="search">
            Search for news articles from the Wall Street Journal:{' '}
            <div>
                <input type="text" onChange={props.updateSearchTerm}></input>
                <button onClick={props.updateSearchResults} >Go!</button>
            </div>
            {/* <Display articles={props.articles} /> */}
        </div>
    )
};