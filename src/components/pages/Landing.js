import {Link} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.production.min'
function Landing({news,faves, realnews, searchNews, setSearchNews}) {


        const favorates = faves.map((element, idx)=>{
           
            
            return <li key={`fav-id-${idx}`} textDecoration={'none'}><Link to={`/display/${idx}`}>{element.title}</Link></li> 
            
        
          })

    return (
        <>
        <h1>Landing Page</h1>
        <h2>Favorated Articles</h2>
        <ul>
        {favorates}
        </ul>
        <hr></hr>
        <form>
            <label>Search news:</label>
            <input
            type="text"
            value={searchNews}
            name="search"
            onChange = {(e)=> setSearchNews(e.target.value)}
            ></input>
        </form>
        <ul>
        {realnews}
        </ul>
        </>
    )
}

export default Landing;