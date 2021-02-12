import React, {Component} from 'react'
import { SearchBar } from './SearchBar'
import {Link} from 'react-router-dom'

// Nave bar needs home, search bar, stored 

export const NavBar = (props) => {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/'>Home</Link>{' | '}
                    <Link to='/Faves'>Favorites</Link>{' | '}
                    <input type='text' />
                    <button>Search</button>
                </nav>
            </header>
        </div>
    )
}