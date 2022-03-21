export default function SearchPage({ searchData, setSearchData, handleSearch}) {
  
    return(
        <>
        <form onSubmit={handleSearch}>
          <label htmlFor="search">Search: </label>
          <input 
            type="text" 
            id="search"
            value={searchData}
            onChange={e=>setSearchData(e.target.value)}
          />
          <input type="submit" />
        </form>
        </>
    )
}