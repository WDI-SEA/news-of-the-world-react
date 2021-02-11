import { Link } from 'react-router-dom'

export const LandingDetail = props => {
    let stateData = props.location.state

    console.log(stateData, 'inside map')
    
    return (
        <div className="detail-page">
                <img src={stateData.urlToImage} />
            <div className="detail-container">
                <h2>{stateData.title}</h2>
                <p>{stateData.content} <a href={stateData.url}>read more from {stateData.source.name}</a> </p>
                <p>author: {stateData.author}</p>
                <p>published:{stateData.publishedAt}</p>
                <Link to={{
                    pathname: "/"
                }}>Go Back</Link>
            </div>
        </div>
    )
}