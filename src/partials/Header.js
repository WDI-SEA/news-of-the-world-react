import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <Link to="/">Latest Stories</Link>{' | '}
            <Link to="/archive">Archived Stores</Link>
        </header>
    )
}

export default Header