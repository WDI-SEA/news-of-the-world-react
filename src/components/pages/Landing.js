import { Link } from 'react-router-dom'
import Faviorites from './Faviorites'

function Landing(props) {

    const displayArticles = props.articles.map((el, index) => {
        return <div key={`articleDiv-${index}`} ><Link key={`articleLink-${index}`} to={`/article/${index}`}>
            <li key={`article-${index}`} >{el.title}</li>
            </Link>
            <button key={`articleButton-${index}`} onClick={()=>props.handleClick(el)} >Add to Faviorites</button>
            </div>
    })

    return (
        <div>

        <form onSubmit={props.onSubmit}>
            <label htmlFor="article-search">Search Article: </label>
            <input 
            type="text" 
            id="article-search" 
            onChange={props.onChange}
            />
            <button type="submit">Find Results</button>
        </form>

            <h1>Landing Page</h1>
            {displayArticles}
            <h1>Faviorites</h1>
            {<Faviorites favorites={props.favorites}/>}
            <br />
            <br />
            <br />
        </div>
    )
}

export default Landing;