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
            <div className='results'>
                <div className="articles-header">
                    <h1>Search</h1>
                    <form onSubmit={props.handleSearchSubmit}>
                        <div className='search-container'>
                            <label htmlFor='search' hidden>Search for Articles</label>
                            <input
                                name='search' 
                                type='text'
                                value={props.search}
                                onChange={props.handleSearchChange}
                                placeholder='news...'
                            />
                            <input type='submit'/>
                        </div>
                    </form>
                </div>
                <div className='content'>
                    
                    {articles}
                    <button onClick={props.handlePageDecrement}>Previous Page</button>{' | '}
                    <button onClick={props.handlePageIncrement}>Next Page</button>
                </div>
            </div>
            <hr></hr>
            <div className='saved'>
                <h1>Saved</h1>    
                {savedArticles}
            </div>
        </div>
    )
}

export default Landing;