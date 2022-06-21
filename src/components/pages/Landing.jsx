import { Link } from 'react-router-dom'

const Landing = (props) => {

    let articles = props.search ? props.searchedArticles : props.articles
    
    const savedArticles = props.saved.map((article, i) => {
        return(
            <li style={{listStyle: 'none'}} key={`article-${i}`}>
                <Link to={`/article/${i}`}>{article.title}</Link>
            </li>

        )
    })

    articles = props.articles.map((article, i) => {
        return(
            <li style={{listStyle: 'none'}} key={`article-${i}`}>
                <Link to={`/article/${i}`}>{article.title}</Link>
            </li>
        )
    })
   
    // console.log('ARTICLES', articles)
  return (
    <div>

        <form onSubmit={(e)=>props.handleSubmit(e)}>
            <input id="article-search" type="text"
                  value={props.search} onChange={props.handleChange} />
            <button type='submit'>Search</button>
        </form>

        <div>
            <h1>Saved Articles:</h1>
            <ul> {savedArticles} </ul>
        </div>

        <div>
            <h1>Search Headlines:</h1>
            <ul> {articles} </ul>
        </div>
        
    </div>
  )
}

export default Landing;