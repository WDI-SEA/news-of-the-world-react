import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            < Link to='/all' >Home</Link> {' | '}
            < Link to='/business' >Business</Link> {' | '}
            < Link to='/entertainment' >Entertainment</Link> {' | '}
            < Link to='/health' >Health</Link> {' | '}
            < Link to='/science' >Science</Link> {' | '}
            < Link to='/sports' >Sports</Link> {' | '}
            < Link to='/technology' >Technology</Link>
        </div>
    )
}

export default Navbar