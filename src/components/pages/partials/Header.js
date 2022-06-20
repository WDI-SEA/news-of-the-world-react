import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Link to='/'>Top Head Lines</Link>{' | '}
            <Link to='/search'>Search</Link>{' | '}
            <Link to='/favorites'>Favorites</Link>
        </>
    )
}

export default Header;