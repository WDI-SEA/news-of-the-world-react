import { useParams } from "react-router-dom"

export default function FullArticle({ articles }) {
    
    const { id } = useParams()
    console.log(id)

    return(
        <h1>Full Article</h1>
    )
}