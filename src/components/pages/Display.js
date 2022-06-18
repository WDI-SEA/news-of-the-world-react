import {useParams} from 'react-router-dom'

export default function Display(props) {
    const { id } = useParams()
    console.log(id)
    // console.log(id, '****************')
    const article = props.articles[id]

    // const author = null ? ("") : article.author
    console.log(article)

  return (
    <div>
        <img src={article.urlToImage} alt={article.description}/>
        <h1>{article.title}</h1> <button onClick={() => props.handleSaveArticle(article)}>Save for Later</button>
        <h2>{article.description} </h2>
        <h3>{article.author}</h3>
        <p>{article.content} </p>
        <a href={article.url}><p>{article.source.name}</p></a>
        <button onClick={() => props.handleRemoveSavedArticle(article)}>Removed from Saved</button>
    </div>
  )
}
