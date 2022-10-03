

export default function Favorite(props) {
    // const favorites = props.news[0].find((result, idx) => props.faves.includes(idx.toString()))
    console.log(props.news)
    const results = props.news[0].filter((article, idx) => props.faves.includes(idx.toString()))
    console.log(results)
    const showResults = results.map((result, imx) => {
        return(
            <div>
                <h2>{result.title}</h2>
                <p>{result.author}</p>
                <p>{result.content} <a target="_blank" href={result.url}>Go to Article</a></p>
                <button type='submit' value={imx} onClick={props.handleRemove}>Remove Favorite</button>
            </div>
        )
    })


    return (
        <>
            {showResults}
        </>
    )
}