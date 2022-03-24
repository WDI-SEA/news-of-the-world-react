import React from "react";
import { useParams, Link } from 'react-router-dom'

function FavesDisp({ handleClick, removeFave, faves }) {
    const { id } = useParams()

    return (
        <div>
            {/* <h1>Display Page</h1> */}

            <div className="display-title">
                <h2>{faves[id].title}</h2>
            </div>

            <div className="display-image">
                <img src={faves[id].urlToImage} />
            </div>
            <div>
                <p>{faves[id].description}</p>
            </div>
            <div className="display-author">
                <h3>By: {faves[id].author}</h3>
            </div>
            <hr />
            <div className="display-content">
                <p>{faves[id].content}</p>
                <a href={faves[id].url} target='_blank'>See more</a>
            </div>
            <div className="display-source">
                <p>Source: {faves[id].source.name}</p>
            </div>
            <div className="display-publishedDate">
                <p>Date Published: {faves[id].publishedAt}</p>
            </div>
            {!faves.includes(faves[id]) ?
                <button onClick={() => handleClick(faves[id])}>Save</button> :
                <button onClick={() => removeFave(faves[id])}> Saved </button>
            }
            <br />
            <Link to='/'>Back</Link>

        </div>
    )
}


export default FavesDisp;