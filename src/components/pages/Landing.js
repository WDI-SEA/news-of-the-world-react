import {  useState } from "react";
import { Link } from "react-router-dom"

function Landing() {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <h1>WELCOME TO CHANNEL 5 NEWS!</h1> 
            <label htmlFor="news-search">Search for News:</label>
                <input 
                    id="news-search"
                    type="text"
                    value={search}
                    onChange={handleChange}
                ></input>
                <button onSubmit={console.log(search)}>Submit</button>
                <h1>{search}</h1>
        </div>
    )
}

export default Landing;