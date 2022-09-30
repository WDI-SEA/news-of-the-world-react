import { useState, useEffect } from "react";

function Landing() {
    const [articles, setArticles] = useState([{title: "loading articles..."}]);
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
                const articleData = await response.json();
                setArticles(articleData.articles);
            }
            catch (error) {
                console.warn(error);
            }
        }
        getArticles();
    }, []);
    const articleComponents = articles.map((article, index) => {
        return (
            <div key={`article-${index}`}>
                <h2>{article.title}</h2>
            </div>
        );
    });
    return (
        <div>
            <h1>Landing Page</h1>
            {articleComponents}
        </div>
    );
}

export default Landing;