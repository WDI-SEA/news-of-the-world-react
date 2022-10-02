import ArticleTitleCard from "../partials/ArticleTitleCard";

function ArticleList(props) {
    let articleComponents = [];
    if (props.articles && props.articles.length > 0) {
        articleComponents = props.articles.map((article, index) => {
            return (
                <ArticleTitleCard 
                    article={article}
                    index={index}
                    key={`article-${index}`}
                />
            );
        });
    }
    else {
        articleComponents = <h2>Nothing to show or no results</h2>;
    }
    return (
        <div className="mt-2 w-6/12 flex flex-col gap-2">
            {articleComponents}
        </div>
    );
}

export default ArticleList;
