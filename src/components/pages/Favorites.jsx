
import { Link } from "react-router-dom"

    // Add a functionality where the user can save articles (in case they want to read later). You can decide how you want the UX/UI for this part of it to go! Just make sure you have displaying a list on teh landing page of all the saved articles 

    export default function Favorites({articles}) {
        
        const savedArticles = articles.map((article, idx) => {
            return ( 
                <li key = {`saved-${idx}`}>
                <Link to= {`/articles/${idx}`}> {article.title}</Link>
                </li>
            )
        })
        return (
            <div>
            <h1>Saved Articles</h1>
            <ul>{savedArticles}</ul>
            <Link to={'/'}>
                Home
            </Link>
            </div>
        )
    }
