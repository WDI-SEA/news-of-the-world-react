import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Display } from './Display';
import { Landing } from './Landing';
import '../styling/style.css';

function App () {

    const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey='
    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(url+API_KEY)
        .then(res => res.json())
        .then(resData => {
            resData = Object.values(resData)
            console.log(resData)
        })
    })

    return (
        <div>
            <h1>hi</h1>
        </div>
        // <Router>
        //     <div className='app'>
        //         <Landing />
        //         <Display />
        //     </div>
        // </Router>
    )
}

export default App