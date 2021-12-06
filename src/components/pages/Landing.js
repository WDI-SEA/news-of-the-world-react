import React from "react";

function Landing(props) {
    // let [searchResults, setSearchResults] = useState([])
    // let [searchTerm, setSearchTerm] = useState('bitcoin')
    // let [faves, setFaves] = useState([])

    // useEffect(()=>{
    //     fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=6935862978ef427e84ba0add779331d7`)
    //     .then(response => response.json())
    //     .then(rdata => {
    //         console.log('response data', rdata)
    //         setSearchResults(rdata.articles)
    //     })
    // }, [searchTerm])

    
    // const handleChange = (e) => {
    //     setSearchTerm(e.target.value)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setSearchTerm(e.target[0].value)
    //     console.log(e)
    // }
    
    // const handleClick = (article) => {
    //     if (faves.indexOf(article)===-1) {
    //         setFaves([...faves, article])
    //       }
    //     }

    // const allResults = searchResults.map((article, i) =>{
    //     return <li onClick={()=>handleClick(article)} key={i}>{article.title}</li>
    // })

    // const allFaves = faves.map((article, i) =>{
    //     return <li key={i}>{article.title}</li>   
    // })

    return (
        <>
        <h1>Landing Page</h1>
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="search" id="search"/>
            <input type="submit" value="search"/>
        </form>
        <p>Results:</p>
        <ul>{props.allResults}</ul>
        <p>Favorite Articles:</p>
        <ul>
            {props.allFaves}
        </ul>
        </>
    )
}

export default Landing;