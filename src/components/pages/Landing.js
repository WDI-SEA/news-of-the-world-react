import React from "react";

function Landing({newsList}) {
    return (
        <>
            <h1>Top News</h1>
                {newsList}
        </>
    )
}

export default Landing;