import { Link } from 'react-router-dom'

function Layout({ children }) {
    return (  
        <>
            <h1>What's Goin' On In The USA???</h1>
            <nav>
                <ul>
                    <Link to="/">Home Page</Link>
                    <li>Search:<input type="text" /></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;