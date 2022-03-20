import { Link } from "react-router-dom"

export default function Saved({ articles }) {
   const savedArticles = JSON.parse(sessionStorage.getItem('saved')||"[]")
   const titles = savedArticles.map((article, idx) => {
    return (
      <div>
          <a class='saved-headlines' href={article.url}>{article.title} </a>
      </div>
   )
    })
    return (
       <div>
           <h1 class="head">THE WORLD IS CERTAINLY COMING TO AN END</h1>
           <h2 class="subhead">SAVED ARTICLES</h2>
        <ul>{titles}</ul>
        <Link class="link" to={`/`}>
        Home
      </Link>
       </div>
    )
}