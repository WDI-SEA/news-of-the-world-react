import React from "react";

function Landing(props) {
    const allArticles = props.data.map((title, id) => {
        if(title){
            return 
                <div
                    key={id}>
                    <li>{`/display/${id}`}{title}</li>
                </div>
        }
    })
    return (
      <div>
        <h1>The News</h1>
        <input 
            type='text'
            placeholder='search for a topic'
            onChange={props.handleChange}
        />
      </div>
    )
}

export default Landing;