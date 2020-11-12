import React, { Fragment } from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <Fragment>
            <div className="not_found">
                <div className="not_found_header">
                    <Link href="/"><a className="logo">netflixroulette</a></Link>
                </div>
                <div className="not_found_main">
                    <h2>404 <span>Not Found</span></h2>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFoundPage;