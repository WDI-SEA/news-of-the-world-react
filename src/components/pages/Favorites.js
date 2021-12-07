import { Link } from 'react-router-dom'


function Favorites(props) {
    const allFaves =  props.faves.map((article, i) => (
        <div>
        <Link to={`/Display/`} state={article} ><h3>{article.title}</h3></Link>
            {/* <button onClick={()=>props.clicky(article)}>Add to Fave</button> */}
        </div>
      ))
    return (
        <div>
            {allFaves}
        </div>
    )
}

export default Favorites