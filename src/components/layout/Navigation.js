// import { useState } from "react"
import { Link } from "react-router-dom"


export default function Navigation () {

    
  return (
    <>
      <div className='sidenav'>
        <Link to='/'>Home</Link>
        {/* <Link to='/'>Search</Link>        
        <label htmlFor='start'>Go to date:</label>
        <input
          type='date'
          id='start'
          name='trip-start'          
          min='2018-01-01'
          max='2022-12-31'
        />         */}
      </div>
    </>
  )
}
