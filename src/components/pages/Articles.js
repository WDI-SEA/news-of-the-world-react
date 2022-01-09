import { Link } from "react-router-dom"
// import Display from "./Display"

const Articles = (props) => {
  const articleList = props.articleNames
    ? props.articleNames.map((article, i) => {
        return (
          <li key={i}>
            <h3>
              <Link to={`/display/${i}`}>{article.title}</Link>
            </h3>
            <p>{article.author}</p>
          </li>
        )
      })
    : []

  return (
    <div>
      <ul>{articleList}</ul>
      {/* <Display articleClicked={articleList}/> */}
    </div>
  )
}

export default Articles