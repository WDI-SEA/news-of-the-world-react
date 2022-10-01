import { useEffect, useState, useHistory } from 'react'

function Landing(props) {
    console.log(props.search)
    return (
        <>
            <h1>Landing Page</h1>
            <p>
                Search:
                <form action="/" method="get" autoComplete="off">
                    <input type="text" id="search" />
                    <button type='submit' id="search" value="hello" onClick={props.onClick}>Submit</button>
                </form>

            </p>
        </>
    )
}

export default Landing;