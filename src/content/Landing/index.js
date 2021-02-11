import React from 'react';
import { Search } from './Search'

export const Landing = props => {
    return (
        <div>
            <Search searchUsArticle={props.searchUsArticle} searchQuery={props.searchQuery} query={props.query} setSearchTerm={props.setSearchTerm}/>
        </div>
    )
};
