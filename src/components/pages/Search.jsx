import React, { useCallback, useState } from "react"
import Articles from "../Articles"

const Search = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")

  const search = useCallback(
    async (query) => {
      try {
        if (isLoading) return

        setIsLoading(true)
        const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        setArticles(data.articles)
        setIsLoading(false)
      } catch (error) {
        console.error("Search failed", error)
        setIsLoading(false)
      }
    },
    [isLoading]
  )

  const handleInputChange = useCallback((event) => {
    setQuery(event.target.value)
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      console.log(`Searching for ${query}`)
      search(query)
    },
    [search, query]
  )

  return (
    <>
      <div className="flex flex-col items-center p-5">
        <h1 className="font-bold text-4xl mb-9">Search for News</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start text-left w-72 pb-8"
        >
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="border-2 px-2 py-1 w-full"
          />
          <button
            type="submit"
            className="bg-slate-300 rounded px-5 py-2 mt-3 w-full font-bold uppercase"
          >
            Search
          </button>
        </form>
        {isLoading && <p className="text-xl">Loading...</p>}
        {!isLoading && <Articles articles={articles} />}
      </div>
    </>
  )
}

export default Search
