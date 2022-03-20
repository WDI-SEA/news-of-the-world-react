import React from 'react'
import { useParams } from "react-router-dom"

function Display({headlines}) {
    console.log('PROPppppppppS')
    console.log({headlines})
    const params=useParams()
    console.log("PARAMS", params)
    const headline = headlines[params.id]
    return (
        <>
        
        <h1>Display Page</h1>
        <h2>{headline.url}</h2>
        </>
    )
}

export default Display;