import React from "react";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Landing({topNewsList, faves, setFaves}) {
    const {id} = useParams()

    const newsList = topNewsList.map((news, id) => {
        return (
          <div key={id} style={{
            border: '2px solid black',
            padding: "20px",
            margin: "10px"
          }}>
            {news.urlToImage === null ? <h4>Image Unavailable</h4> : <img src={news.urlToImage} width={500} height='auto'/>}
            <h2><Link to={`/display/${id}`} style={{textDecoration: 'none', color: 'black'}}>{news.title}</Link></h2>
            <div>
              <h5>{news.description}</h5>
            </div>
              {news.author === null || news.author === "" ? <h4>No Author</h4> : <h4>Written By: {news.author}</h4>}
            <div>
              <p>Click here for <a href={news.url} target="_blank">more</a> information about the article</p>
            </div>

            {/* why doesn't news[id] not work? */}
            <button onClick={() => setFaves([...faves, topNewsList[id]])}>
              Favorite this Article
            </button>
          </div>
          
        )
      })

    const faveList = faves.map((fave, id) => {
        return (
            <div key={id}>
                <h2>{fave.title}</h2>
                {fave.urlToImage === null ? <h4>Image Unavailable</h4> : <img src={fave.urlToImage} width={500} height='auto'/>}
                <h5>{fave.description}</h5>

            </div>
            


        )
    }) 
      console.log("These are your faves!",faves)
    return (
        <>
            <h1>My Favorite Articles</h1>
                {faveList}
            <h1>Top News</h1>
                {newsList}

        </>
    )
}


export default Landing;