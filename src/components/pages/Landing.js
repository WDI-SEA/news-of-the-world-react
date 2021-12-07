import { Link } from 'react-router-dom'
import Favorites from './Favorites'


function Landing(props) {
    const topNews =  props.news.map((article, i) => (
        <div>
        <Link to={`/Display/`} state={article} ><h3>{article.title}</h3></Link>
            <button onClick={()=>props.clicky(article)}>Add to Fave</button>
        </div>
      ))
    return (
        <div className="landing">
            <div className="news-container">
                <h1>{props.search === "" ? 'Top News' : props.search}</h1>
                <div>
                {topNews}
                </div>
                
            </div>
            <div className="fave-container">
                <h1> Favorite </h1>
                <div>
                <Favorites faves={props.faves}/>
                </div>
            </div>
        </div>
        
    )
}


export default Landing