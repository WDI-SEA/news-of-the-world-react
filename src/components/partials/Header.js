import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <Link to="/">Go to Home Page</Link>{" | "}
            <Link to="/display">Display</Link>
           
        </nav>
    )
}