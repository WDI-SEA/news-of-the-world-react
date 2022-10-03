import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div>
            <nav>
                <Link to="/">News</Link>
            </nav>
            <form>
                <input type='text' placeholder='keywords...' onChange={props.handleChange}/>
                <Link to="/search">Search</Link>
            </form>
        </div>
    )
}