import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <header>
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to = "/fave">favorites</Link></li>
                </ul>
            </header>
        </div>

    )
}

export default Header