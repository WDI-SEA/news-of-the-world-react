import React from 'react';

export const Landing = props => {
    return (
        <div>
                <label htmlFor="search">Enter a Search Term!</label>
                <input type="text" name="search" onChange={props.handleChange} value={props.search} />
                <input type="submit" onClick={props.handleSubmit} />
                {props.results}
        </div>
    )
};