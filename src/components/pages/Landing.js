import { Link } from 'react-router-dom'

function Landing(props) {
    const articles = props.articles.map((article, i) => {
        return  (
            <div className='article-links'>
                <Link to={`/articles/${i}`}>{article.title}</Link>
            </div>
        )
    })

    const savedArticles = props.saved.map((article,i) => {
        return (
            <div className='faves'>
                <Link to={`/articles/saved/${i}`}>{article.title}</Link>
            </div>
        )
    })
    return (
        <div className='articles'>
            <div className="articles-container">
                <h1>Articles</h1>
                <label htmlFor='search'>Search for Articles</label>
                <form onSubmit={props.handleSearchSubmit}>
                <input
                    name='search' 
                    type='text'
                    value={props.search}
                    onChange={props.handleSearchChange}
                />
                <input type='submit'/>
                </form>
                
                {articles}
                <button onClick={props.handlePageIncrement}>Next Page</button>
                <button onClick={props.handlePageDecrement}>Previous Page</button>
            </div>
            <div className='saved-articles-container'>
                {savedArticles}
            </div>
        </div>
    )
}

export default Landing;