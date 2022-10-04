import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/' id='main-page'>Main page</Link>
            </nav>
            <div className='logo'>
                <h1>The Daily News</h1>
            </div>
            
        </header>
    )
} 