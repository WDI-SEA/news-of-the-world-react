import React from "react";
import { useParams } from 'react-router-dom'

function Display({ newsInfo, setFaves, faves}) {
    const {id} = useParams()
    return (
        <div>
            <h1>Display Page</h1>

            <div>
                <img src={newsInfo[id].urlToImage} width="500" alt="article related pic"></img>
                <h2>{newsInfo[id].title}</h2>
                <h4>{newsInfo[id].description}</h4>
                <p>{newsInfo[id].content}</p>
                <p>Author: {newsInfo[id].author}</p>
            </div>
            <div>
                    <button
                        id="submit"
                        type="button"
                        onClick={() => setFaves([...faves, newsInfo[id]])}
                    >
                    FAVORITE
                    </button>
                </div>
        </div>
    )
}

export default Display;