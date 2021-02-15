import React from 'react';
import { Link } from 'react'

export const Landing = props => {
    return (
        <div>
            <input onChange={props.search} value={props.userInput} type='text'/>
            <button onClick={props.searchClick}>Search</button>
            <div>
                {props.arrayOfNews.map((news, i) => {
                    return(
                        <div>
                            <h3><a href={news.url}>{news.title}</a></h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};