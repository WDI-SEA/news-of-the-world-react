import { Link } from 'react-router-dom'

export default function Display(props) {
  const handleClick = (e, article) => {
    e.stopPropagation()

    props.isFave ? props.dropFave(article) : props.addFave(article)
  }

  // console.log(props.articles)
  const articleLinks = props.articles.map((article, i) => {
    return (
      <div key={`article_${i}`}>
        <Link to={`/articles/${i}`}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/* {article.author[i] ? <p>{`by: ${article.author[i]}`}</p> : ''} */}
        </Link>
        <button 
          onClick={(e) => handleClick(e, article)}
        >
          {props.isFave ? 'Remove From Favorites' : 'Add To Favorites'}
        </button>
      </div>
    )
  })

  return (
    <>
      <h1>{props.isFave ? 'Favorites' : 'News'}</h1>
      {props.isFave ? '' : 
      <div>
        <input 
          type='text'
          placeholder='Search a topic...'
          onChange={props.handleChange}
        />
        <button onClick={props.updateSearch}>Search</button>
        <h2>Topic: {props.input}</h2>
      </div>}

      
      {articleLinks}
      
    </>
  )
}