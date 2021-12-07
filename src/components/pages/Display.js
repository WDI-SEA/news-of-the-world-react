import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Display(props) {
    let params = useParams()
    let content = props.articles ? props.articles[params.id] : 'error'
    console.log(content);
    return (
        <div>
            <h1>{content.title}</h1>
            <h2>{content.content}</h2>
            <a href={content.url}>Read more!</a>
            <Link to='/' onClick={() => props.handleClick(content)}>Save this article!</Link>
            <div>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )

}

export default Display;