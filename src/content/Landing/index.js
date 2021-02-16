import React from 'react';
import axios from 'axios'

import { Link } from 'react'

import { useEffect, useState} from  'react'
import { Display } from '../Display';


export const Landing = props => {

const [news, setNews] = useState([])


    useEffect(() => {
        axios('http://newsapi.org/v2/top-headlines?country=us&apiKey=63ca6b792d99475da52089c83360b842')
        // .then(response => response.json())
        .then(rdata => {
            console.log(rdata)
            // rdata = Object.values(rdata) 
            console.log(rdata)
            setNews(rdata)
            
          })
        }, [])


    //    news.map((stories, index) => {
    //         console.log(stories.data)
    //     })

    return (
        <div>
            <h1>
                Welcome to news of the world! Please click to see it! 
                <Link to={'./Display/index'}>{Display}</Link>
            </h1>
        </div>
    )
};