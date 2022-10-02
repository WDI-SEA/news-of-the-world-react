import { useState, useEffect } from "react";
import axios from "axios";

function Display(props) {

    const [newsResults, setNewsResults] = useState([])
    console.log(props.input)
    
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
                <p>By: {result.author} for "{result.source.name}"</p>
            </li>
        )
    })

    return (
        
        <ul>
            {resultsDisplay}
        </ul>

    )
}

export default Display;