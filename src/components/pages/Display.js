import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

// Display pulls article detail from clicked article.  Opens up new page with /display/:id
function Display(props) {
    let params = useParams()
    // if props.articles exists, create props.articles[params.id], else render error
    let content = props.articles ? props.articles[params.id] : 'error'

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
            {/* Link to send to actual article */}
            <a href={content.url} target="_blank">Article</a>
            <br /><hr></hr>
            {/* If article clicked on, pull in content from above */}
            <Link to='/' onClick={() => props.handleClick(content)}>Save as favorite</Link>
            <hr />
        </div>
    )
}

export default Display