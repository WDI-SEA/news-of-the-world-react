import { useParams } from "react-router-dom";

function Display(props) {
    const {articleId} = useParams();
    const article = props.articles[articleId];
    const dateSplit = article.publishedAt.split("T");
    return (
        <div className="mt-2 flex flex-col items-start w-7/12 mx-auto">
            <a href={article.url} target="_blank">
                <h2 className="text-3xl font-bold hover:text-gray-700">{article.title}</h2>
            </a>
            <div className="flex justify-between w-full">
                <h3 className="text-xl">Author: {article.author}</h3>
                <h3 className="text-xl">{dateSplit[0]}</h3>
            </div>
            <img src={article.urlToImage} className="mt-2 rounded-lg shadow-xl" />
            <button className="self-end mt-2 border rounded-lg px-2 py-1 bg-blue-500 hover:bg-blue-700"
                onClick={() => props.handleSaveClick(article)}>
                Save
            </button>
            <p className="mt-2">{article.description}</p>
        </div>
    )
}

export default Display;