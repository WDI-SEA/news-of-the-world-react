import React from "react"

export const Article = ({ article }) => {
  return (
    <a href={article.url}>
      <article>
        <header>
          <p>
            {article.author && <>{article.author} | </>}
            {article.publishedAt}
          </p>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
        </header>
      </article>
    </a>
  )
}
