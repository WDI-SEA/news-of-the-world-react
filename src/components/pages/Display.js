import { useState } from "react";
import { useParams } from "react-router-dom";
import SaveButton from "../partials/SaveButton";

function Display(props) {
    const {articleId} = useParams();
    let article = props.articles[articleId];
    let savedUrls = [];
    if (!article) {
        article = {url: 0};
    }
    if (props.savedArticles) {
        savedUrls = props.savedArticles.map(obj => {
            return obj.url;
        });
    }
    else {
        savedUrls = [0];
    }
    const [isSaved, setIsSaved] = useState(savedUrls.includes(article.url));
    let dateSplit = "";
    if (article.url === 0) {
        return (
            <div className="mt-2 flex justify-center">
                <h2 className="text-3xl font-bold hover:text-gray-700">something went wrong...</h2>
            </div>
        );
    }
    else if (article.publishedAt) {
        // get only YYYY-MM-DD
        dateSplit = article.publishedAt.split("T");
    }
    else {
        return (
            <div className="mt-2 flex justify-center">
                <h2 className="text-3xl font-bold hover:text-gray-700">loading...</h2>
            </div>
        );
    }
    return (
        <div className="mt-2 flex flex-col items-start w-7/12 mx-auto">
            <a href={article.url} target="_blank">
                <h2 className="text-3xl font-bold hover:text-gray-700">{article.title}</h2>
            </a>
            <div className="flex justify-between w-full">
                <h3 className="text-xl">Author(s): {article.author} from {article.source.name}</h3>
                <h3 className="text-xl">{dateSplit[0]}</h3>
            </div>
            <img src={article.urlToImage} alt={`${article.title} cover photo`} className="mt-2 rounded-lg shadow-xl self-center" />
            <SaveButton 
                article={article}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                handleSaveClick={props.handleSaveClick}
                filter={props.filter}
            />
            <p className="mt-2">{article.description}</p>
        </div>
    )
}

export default Display;