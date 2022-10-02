import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">
                <h1 className="text-center text-5xl font-bold">News of the World</h1>
            </Link>
        </div>
    );
}

export default Header;
