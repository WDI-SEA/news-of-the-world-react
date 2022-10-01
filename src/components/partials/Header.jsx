import { Link } from 'react-router-dom'

import Search from "./Search"

export default function Header(props) {
    return(
        <nav>
            <h1>World News Tonight with React</h1>

            <Link to="/">Home</Link>

            <Search
                searchValue={props.searchValue}
                handleInputChange={props.handleInputChange}
                handleSearch={props.handleSearch}
            />
        </nav>
    )
}