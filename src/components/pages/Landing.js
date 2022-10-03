import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Display from './Display'

function Landing(props) {
   //  const searchUrl =`https://newsapi.org/v2/everything?q=${userQuery}&apiKey=${App}`
  //  const userQuery= " "
  const [search, setSearch] = useState(" ") 

   
    return (
        <div>
           list of searched for news items goes here
        </div>
    )
}

export default Landing;