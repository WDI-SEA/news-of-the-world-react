import React from 'react';
import { Link } from 'react-router-dom'

export const Landing = props => {

    // console.log(props.headLine, 'getting data from display')

    let list
    if (props.headLine.articles) {
        list = props.headLine.articles.map((news, i) => {
            return (
                <div className="display-cell" key={`headLine-key${i}`}>
                    <img src={news.urlToImage} alt="headline images"/>
                    <Link to={{
                        pathname: `/${i}`,
                        state: news
                    }}><strong>{news.title}</strong></Link>
                </div>
            )
        })
    }
    
    return (
        <div className="display-wrap">
            <h1>Headline News</h1>
            <div className="display-container">
                {list}
            </div>
        </div>
    )
};