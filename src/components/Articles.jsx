import React from "react"
import { Article } from "./Article"

export default function Articles({ articles }) {
  const articleComponents = articles.map((article) => (
    <Article article={article} />
  ))
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {articleComponents}
    </div>
  )
}
