import { Link } from 'react-router-dom'

export default function Favorites(props) {
    const faves = props.faves.map((fave, i) => {
        return <>
            <h3 key={`${i}-${fave.title}`}>
                <Link to={`/display/${i}`}>
                    {fave.title}
                    </Link>
                <button
                    onClick={() => props.handleRemove(fave)}
                >
                    remove
                </button>
            </h3>
        </>
    })
    return(
        <>
        {faves}
        </>
    )
}