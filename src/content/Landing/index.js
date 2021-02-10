import React from 'react';

export const Landing = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="search" className="searchBar" placeholder='SEARCH' onChange={props.handleChange} value={props.search} />
            </form>
                {props.results}
        </div>
    )
};