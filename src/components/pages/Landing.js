import React, { useState, useEffect } from "react";

function Landing(props) {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="search" id="search" />
                <input type="submit" value="Search" />
            </form>
            <h3>Results for "{props.searchTerm}" from today</h3>
            <ul>
                {props.allResults}
            </ul>
            <h3>Favorite Articles:</h3>
            <ul>
                {props.allFaves}
            </ul>
        </>
    )
}

export default Landing;