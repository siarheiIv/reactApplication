import React, { Fragment } from 'react';
import not_found from '../../styles/not_found';

const NotFoundPage = () => {
    return (
        <Fragment>
            <div className="not_found">
                <div className="not_found_header">
                    <a href="#" className="logo">netflixroulette</a>
                </div>
                <div className="not_found_main">
                    <h2>404 <span>Not Found</span></h2>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFoundPage;