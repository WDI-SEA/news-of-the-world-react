import React from 'react';
import { Link } from 'react-router-dom'

export const Display = props => {

    console.log(props.searchResults.articles, 'getting data from display')

    let list
    if (!props.searchResults.articles) {
        list = () => {
            return (
                <h3>Search keywords or your keywords don't meet any conditions</h3>
            )
        }
    } else {
        list = props.searchResults.articles.map((search, i) => {
            return (
                
                <div className="display2-cell" key={`search-key${i}`}>
                    <img src={search.urlToImage} alt="searched images" />
                    <Link to={{
                        pathname: `/${i}`,
                        state: search
                    }}><strong>{search.title}</strong></Link>
                </div>
            )
        })
    }

    return (
        <div className="display-wrap">
            <div className="display-container">
                {list}
            </div>
        </div>
    )
};