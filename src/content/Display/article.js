import { title } from "process"
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Article (props) {
    return (
        <div className='article-card'>
            <Card className='p-3'>
                    <Card.Img variant="top" className='card-image' src={props.article.urlToImage} />
                    <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                        {props.article.description}
                    </Card.Text>
                    < Button >
                        <a href={props.article.url} className='article-link' target='_blank'>Go to article</a>
                    </Button>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">From {props.article.author} at {props.article.publishedAt}</small>
                    </Card.Footer>
                </Card>
        </div>
    )
}

export default Article