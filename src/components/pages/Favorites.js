const Favorites = props => {
    
        const allFavorites = props.favorites.map(fave => {
            return <li>{fave.title}</li>
        })

        return (
            <ul>
                {allFavorites}
            </ul>
        )
    
        
    
}

export default Favorites