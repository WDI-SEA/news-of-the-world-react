import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Landing(props) {

    const [input, setInput] = useState('')
    let results = ""

    if (props.search !== '') {
        results = props.news.map((result, i) => {
            return (
                <div>
                    <h2><Link to={`/articles/${i}`} style={{ color: 'white' }}>{result.title}</Link></h2>
                </div>
            )
        })
    }


    const handleSubmit = e => {
        e.preventDefault()
        props.setSearch(input)
    }

    return (
        <>
            <h1>Landing Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Search:</label>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
            {results}

        </>
    )
}

export default Landing;