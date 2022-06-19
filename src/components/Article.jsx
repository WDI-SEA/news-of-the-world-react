import React from "react"

export const Article = ({ article }) => {
  const [title, source] = article.title.split(" - ")
  const publishedAt = new Date(article.publishedAt).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
  return (
    <div className="w-1/2 max-w-md p-5 shadow rounded-md bg-blue-50 text-left">
      <a href={article.url}>
        <article className="">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="m-auto my-5"
          />
          <p className="mb-2">
            <span className="font-bold">{source}</span> | {publishedAt}
          </p>
          <h2 className="font-bold text-lg">{title}</h2>
        </article>
      </a>
    </div>
  )
}
