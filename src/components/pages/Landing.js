import Display from "./Display";


import { useState } from "react";
import { Link } from "react-router-dom"
const axios = require("axios")




function Landing() {
    
    const [search, setSearch] = useState("")

   

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }



    // useEffect(() => {
       
    //     console.log(url)
       
            
    // }, [search])

    const userSearch = (e) => {
        e.preventDefault()
        try {
            const url = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
            console.log(url)
            axios.get(url)
            .then(response => {
                console.log(response.data.articles)
                setSearch(response.data.articles)  
            })
            

           
            
            
        } catch(err) {
            console.warn(err)
        }
    }
    
    <Display searchTerm={search} />
    return (
        <div>
           
            <h1>WELCOME TO CHANNEL 5 NEWS!</h1> 
            <label htmlFor="news-search">Search for News:</label>
        
            <form onSubmit={userSearch}>
                <input 
                    id="news-search"
                    type="text"
                    value={search}
                    onChange={handleChange}
                ></input>
                <Link to={"/display"}><button type="submit">Submit</button></Link>
            </form>
            
                
        </div>
    )
}

export default Landing;