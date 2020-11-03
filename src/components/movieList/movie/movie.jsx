import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import EditMovie from '../editMovie/index';
import movie from './movie.scss';

const Movie = (props) => {
    const { description } = props;
    return (
        <Router>
            <article className="movie">
                <Link to={`/film/${description.id}`}>
                    <img src={description.poster_path} alt="" className="movie__image" />
                </Link>
                <EditMovie description={description} />
                <div className="movie__description">
                    <div>
                        <h2 className="movie__title">{description.title}</h2>
                    </div>
                    <p className="movie__year">{description.release_date.slice(0, 4)}</p>
                </div>
            </article>
        </Router>
    )
}

export default Movie;