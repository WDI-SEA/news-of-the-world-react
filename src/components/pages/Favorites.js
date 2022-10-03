

export default function Favorites(props) {
    let favorites = ''
    if(props.favorites.length>0) {
        favorites = props.favorites.map((favorite, i) => {
            return(
                <div key={`favoriteKey${i}`}>
                    <h1>{favorite.title}</h1>
                    <h3>{favorite.author}|{favorite.publishedAt.split('T')[0]}</h3>
                    <p>{favorite.content}</p>
                    <a target="_blank" href={`${favorite.url}`}>Original Article</a>
                    
                </div>
            )
        })
    } else {
        return <h1>You have no favorites, please add some!</h1>
    }

    return(
        <div className="landingDiv">
            {favorites}
            <button onClick={() => props.handleRemoveFavorite()}>Clear Favorites</button>
        </div>
    )
}