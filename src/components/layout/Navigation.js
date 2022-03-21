// import { useState } from "react"
import { Link } from "react-router-dom"


export default function Navigation ({ search, setSearch }) {
    
    const submitForm = (e) => {
        e.preventDefault()
        setSearch(search)
      }
    
  return (
    <>
      <div className='sidenav'>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Pinned Articles</Link>
        <form onSubmit={submitForm}>
          <label htmlFor='search'></label>
          <input
            type='text'
            value={search}
            id='search'
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <button type='submit'>Search</button>
        </form>        
      </div>
    </>
  )
}
