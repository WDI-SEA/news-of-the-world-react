import React from 'react';
import { Display } from '../Display'

export const Favorites = props => {
    return (
        <div>
            <Display articles={props.laterArticles} />
        </div>
    )
};