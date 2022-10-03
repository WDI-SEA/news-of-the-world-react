import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Landing(props) {

    const [input, setInput] = useState('')
    let results = ""
    
    if(props.search !== '') {
        results = props.news[0].map((result, i) => {
            return (
                <div>
                    <h2><Link to={`/articles/${i}`} style={{color:'white'}}>{result.title}</Link></h2>
                </div>
            )
        })
    }
    


    
    return (
        <>
            <h1>Landing Page</h1>
            <p>
                Search:
                <input type="text" id="search" onChange={e => setInput(e.target.value)} />
                <button type='submit' id="search" onClick={() => props.handleClick(input)}>Submit</button>
            </p>
            {/* {props.search !== '' ? results : null} */}
            {results}
            {/* <div>
                <p>{props.news}</p>
            </div> */}
            
        </>
    )
}

export default Landing;