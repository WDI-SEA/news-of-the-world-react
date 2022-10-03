import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function Display(props) {

    const [newsResults, setNewsResults] = useState([])
    console.log(props.input)
    
    const handleClick = result => {
        // console.log(result)
        props.setFaves([...props.faves, result])
        console.log(props.faves)
    }

    useEffect(() => {
        async function fetchNews() {
            try{
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${props.input}&from=2022-10-01&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
                console.log(response.data.articles)
                setNewsResults(response.data.articles)
            }catch(err){
                console.log(err)
            }
        }
        fetchNews()
    }, [])
    

    const resultsDisplay = newsResults.map((result, i) => {
        return(
            <li 
                key={`result${i}`}
                style={{listStyleType: 'none'}}
            >
                <a href={result.url}>
                    <h3>{result.title}</h3>
                    <img src={result.urlToImage} width="500px" alt={result.title}/>
                </a> 
                <button onClick={() => handleClick(result)}>Add to Favorites</button>
                <p>By: {result.author} for "{result.source.name}"</p>
            </li>
        )
    })

    return (
        <div>
            <Link to={"/"}>
                Back Home
            </Link>
            <ul>
                {resultsDisplay}
            </ul>

        </div>
    )
}

export default Display;