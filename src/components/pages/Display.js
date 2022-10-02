import { useState } from "react";
import { useParams } from "react-router-dom";
import SaveButton from "../partials/SaveButton";

function Display(props) {
    const {articleId} = useParams();
    const article = props.articles[articleId];
    const savedUrls = props.savedArticles.map(obj => {
        return obj.url;
    });
    const [isSaved, setIsSaved] = useState(savedUrls.includes(article.url));
    // get only YYYY-MM-DD
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
            <img src={article.urlToImage} alt={`${article.title} cover photo`} className="mt-2 rounded-lg shadow-xl" />
            <SaveButton 
                article={article}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                handleSaveClick={props.handleSaveClick}
            />
            <p className="mt-2">{article.description}</p>
        </div>
    )
}

export default Display;