import { useParams } from 'react-router-dom'

function Display(props) {
    

    let params  = useParams()
    let content = props.articles ? props.articles[params.id] : 'API or props error'
    return (
        <div>
         <h1>{content.title}</h1>
         <p>{content.content}</p>  
        <img src = {content.urlToImage} alt = 'content-iamge'/>
        <div>
        <button onClick={() => props.handleClick(content)}>Add to favorites</button>
        </div>
 
        </div>
    )
}

export default Display