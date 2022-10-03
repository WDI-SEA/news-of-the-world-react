import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import Search from '../partials/Search'

function Display(props) {

   
    return (
        <div>
            <h1>The News:</h1>
            <ul>{allArticles}</ul>
        </div>
    )
}

export default Display;