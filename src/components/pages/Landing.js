import { useEffect, useState } from 'react'

function Landing(props) {
    console.log("This is the " + props.news[0])
    const results = () => {
        if (props.news[0] !== 'error') {
            props.news[1].map(result => {
                return (
                    <div>
                        <p>{result.author}</p>
                    </div>
                )
            })
        }
    }
    return (
        <>
            <h1>Landing Page</h1>
            <p>
                Search:
                <input type="text" id="search" value={props.state} onChange={props.handleChange} />
                <button type='submit' id="search" value={props.state} onClick={props.handleClick}>Submit</button>
            </p>
            {results()}
        </>
    )
}

export default Landing;