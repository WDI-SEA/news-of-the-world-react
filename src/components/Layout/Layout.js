import { Link } from 'react-router-dom'

function Layout({ children, search, handleChange }) {
    return (  
        <>
            <h1>What's Goin' On In The USA???</h1>
            <nav>
                <ul>
                    <Link to="/">Home Page</Link>
                    <li>Search:<input type="text" id="search" value={search} onChange={handleChange}/></li>
                </ul>
            </nav>
            <hr></hr>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;