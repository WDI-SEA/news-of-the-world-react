import { Link } from "react-router-dom"

export default function SearchButton ({searchTerm}) {
    return(
        <div>
            <Link to={`/top/${searchTerm}`}>
                {searchTerm}
            </Link>
        </div>
    )
}