import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return (
        <div className="nav">
            <nav>
                <Link to="/">Home</Link>{' | '}
                <Link to="/favorites">Favorites</Link>{' | '}
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

