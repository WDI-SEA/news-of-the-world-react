export default function Favorites(props) {

    const removeFave = faveIdx => {
        const faveArr = [...props.faves]
        faveArr.splice(faveIdx, 1)
        props.setFaves(faveArr)
    }

    const faveDisplay = props.faves.map((fave, i) => {
        return(
            <li 
                key={`fave${i}`}
                style={{listStyleType: 'none'}}
            >
                  <a href={fave.url}>
                    <h3>{fave.title}</h3>
                    <img src={fave.urlToImage} width="500px" alt={fave.title}/>
                </a> 
                <button onClick={() => removeFave(i)}>Remove from Favorites</button>
                <p>By: {fave.author} for "{fave.source.name}"</p>
            </li>
        )
    } )

    return(
        <ul>
            {faveDisplay}
        </ul>
    )
}