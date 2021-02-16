import React from 'react';

export const Display = props => {

    let content = props.data ? '' : 'Ruh-Roh! API or props fail!';

    return (
        <div>
      {props.news.map((stories, i) => {
                    return(
                        <div>
                            <h3><a href={stories.url}>{stories.title}</a></h3>
                        </div>
                    )
                })}
        </div>
    )
};