import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav>
                <Link to='/' style={{color:'white'}}>Home</Link>
                {" | "}
                <Link to='/favorites' style={{color:'white'}}>Favorites</Link>
            </nav>
        </>
    )
}