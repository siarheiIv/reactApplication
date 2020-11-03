import React, { Fragment } from 'react';
import not_found from '../../../styles/not_found';

const NoMoviesFound = () => {
    return (
        <Fragment>
            <div className="no-movies">
                <h2>Movies not found</h2>
            </div>
        </Fragment>
    )
}

export default NoMoviesFound;