import { Link } from 'react-router-dom'

function Faviorites(props) {

    const display = () => {
        if(props.favorites !== []){
            return  props.favorites.map((el, index)=>{
                return <Link key={`favoriteLink-${index}`} to={`/favorites/${index}`}>
                    <li key={`favorite-${index}`} >{el.title}</li>
                </Link>
            })
        }
    }

    return <div>{display()}</div>

}

export default Faviorites