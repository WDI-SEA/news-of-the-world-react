import {Link} from 'react-router-dom'
import {  useParams } from 'react-router'

function Display(props) {
    let params = useParams()
    let content = props.articles ? props.articles[params.id] : 'Whoops?'
    return (
        <div>
           <h1>{content.title}</h1>
           <img src={content.urlToImage} alt={content.title} width="50%" height="50%"></img>
           <br></br>
           <b>{content.author}</b>
           <p>{content.description}</p>
           <a href={content.url}>Read Full Article Here!</a>
        </div>
        
    )
}

export default Display;

