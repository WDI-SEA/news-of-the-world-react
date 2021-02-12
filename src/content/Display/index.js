import React from 'react';
import {Link} from 'react-router-dom'
export const Display = props => {
    let contents=props.topNews.map((content,i)=>{
        return<Link to={`/Landing/${i}`}>
                <>
                    <img src={content.urlToImage}/>
                    <p className="title">{content.title}</p>
                </>
            </Link>
            
            
        
    })

    return (
        <div className="topNewsHome">
            {contents}
        </div>
    )
};