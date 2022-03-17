export default function Article({ articlesResults }) {
    // const articlesResults = articlesResults[0]
    // console.log(articlesResults)
    return (
        <>
            <div>
                <img src={articlesResults.urlToImage}></img>
                <div><h1>{articlesResults.title}</h1></div>
                <hr></hr>
                <h3>{articlesResults.author}, for {articlesResults.source.name}</h3>
                <hr></hr>
                <p>{articlesResults.content}</p>
            </div>
        </>
    )
}