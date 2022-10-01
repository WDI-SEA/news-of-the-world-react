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
        <div className="w-6/12">
            {articleComponents}
        </div>
    );
}

export default ArticleList;
