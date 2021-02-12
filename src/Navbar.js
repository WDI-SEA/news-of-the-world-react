import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

const NavList = () => {
    return (
        <div className='navbank'>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    < Link to='/all' className='nav-link' >Home</Link>
                    < Link to='/business' className='nav-link' >Business</Link>
                    < Link to='/entertainment' className='nav-link' >Entertainment</Link>
                    < Link to='/health' className='nav-link' >Health</Link>
                    < Link to='/science' className='nav-link' >Science</Link>
                    < Link to='/sports' className='nav-link' >Sports</Link>
                    < Link to='/technology' className='nav-link' >Technology</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default NavList