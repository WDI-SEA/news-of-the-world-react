import { useParams } from 'react-router-dom'

export default function Details ({articles}) {
    const { id } = useParams()
    const chosenArticle = articles[id-1]
    console.log(chosenArticle)
    const date = new Date(chosenArticle.publishedAt)
    const day = date.getDate().toString().padStart(2,'0')
    const month = (date.getMonth()+1).toString().padStart(2,'0')
    const year = (date.getFullYear())
    const publishDate = `${month}-${day}-${year}`
    return (
        <div className="details">
            <h1>{chosenArticle.title}</h1>
            <h3>Author: {chosenArticle.author}</h3>
            <h5>Published on: {publishDate}</h5>
            <img src={`${chosenArticle.urlToImage}`} alt={chosenArticle.title} />
            <p>{chosenArticle.description}</p>
            <a href={`${chosenArticle.url}`} target="_blank" rel="noreferrer">Link to Article</a>
            <p>source: {chosenArticle.source.name}</p>
        </div>
    )
}