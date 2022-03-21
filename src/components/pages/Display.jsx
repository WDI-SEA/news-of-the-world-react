import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Display({ articles }) {    
    // state
    const [currentArticle, setCurrentArticle] = useState({})

    const { id } = useParams()

    // console.log(articles[id])
    // setCurrentArticle(articles[id])

    useEffect(()=> {
        setCurrentArticle(articles[id])
    }, [])

    // setCurrentArticle(articles[id])
    // console.log(currentArticle)

    return(
        <div>
            <h1>Current Article</h1>
            <h2>Title: {currentArticle.title}</h2>
            <p>{currentArticle.description}</p>
            {/* <img src={currentArticle.urlToImage} alt="article image" /> */}
        </div>
        
    )
}