import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
// by default it knows that has to look for index.js if we don't mention js file name
import { Display } from './Display';
import { Landing } from './Landing';
import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    const [topNews,setTopNews]=useState([])
    useEffect(()=>{
        console.log("hello")
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(response=>{
        return response.json()
    })
    .then(rdata=>{ 
        // rdata=Object.values(rdata)
        // console.log(topNews)
        console.log(rdata.articles)
        setTopNews(rdata.articles)
        console.log(topNews)
    })      
    },[])
    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Link to="/">Home</Link>
                <Route exact path="/" render={()=> <Display topNews={topNews}/>}/>
                <Route path="/Landing/:id" render={(props)=>{
                    let result=topNews[props.match.params.id]
                    console.log(result)
                    return <Landing result={result}/>
                }} />
            </div>
        </Router>
    )
};