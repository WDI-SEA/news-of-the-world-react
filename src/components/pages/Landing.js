import React from "react";
import {Link} from 'react-router-dom'


function Landing(props) {
    const results = props.results.map((arcticle, index) => {
        return (
            <div key={`key is ${index}`} className="linked">
                <Link to={`/display/${index}`}><p>{arcticle.title}</p></Link>
            </div>
        )
    })

    return (
       <div>
            <form className='searchContainer' onSubmit={props.handleSubmit}>
                <input type='text' name='search' className='searchBar' placeholder="SEARCH" onChange={props.handleChange} value={props.search} />
            </form>
                {results}
       </div>
    )
}

export default Landing;