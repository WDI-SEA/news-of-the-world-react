import React from "react";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function Display({ pinArticle, articles }) {
    const { id } = useParams()
    console.log(articles[id].description)
    return (
        <>
        <div className='card-head'>
        <div>
        <Link to="/favorites">
            <span className='add-favorite' onClick={() => {pinArticle(articles[id])}}>
                ⭐ Pin news  
            </span>            
        </Link>
        </div>
        <div className='card-img-holder'>
          <img src={articles[id].urlToImage} alt={articles[id].description} />
        </div>
        <div className='card-head-content'>
          <h3>{articles[id].title}</h3>
          <p>
            <small>
              by {articles[id].author}. Published :{' '}
              {dayjs(articles[id].publishedAt).format('MM/DD/YYYY')}
            </small>
          </p>
          <p>
            <small>
              <a href={articles[id].url}>Read more...</a>
            </small>
          </p>
        </div>        
      </div>
    </>
    )
}

