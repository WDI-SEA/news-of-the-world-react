import { useParams } from "react-router-dom"

export default function Display(props) {
  const { id } = useParams()
  const article = props.articles[id]

  return (
    <>
      <h1>{article.title}</h1>
      <p>By: {article.author.length ? article.author : ''}</p>
      <button onClick={(e) => props.addFave(e, article)}>Add To Favorites</button>
      <p>{article.content}</p>
      <img src={article.urlToImage} alt={article.title} />
    </>
  )
}