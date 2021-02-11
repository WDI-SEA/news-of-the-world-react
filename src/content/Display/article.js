import { title } from "process"

function Article (props) {
    return (
        <div className='article-card'>
            <h2>
                {props.article.title}
            </h2>
            <p>
                
                {props.article.description}
                <button><a href={title.url}>Go to article</a></button>
            </p>
        </div>
    )
}

export default Article