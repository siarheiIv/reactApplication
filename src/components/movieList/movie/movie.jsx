import React from 'react';
import PropTypes from 'prop-types';
import EditMovie from '../editMovie/index';
import movie from './movie.scss';

const Movie = (props) => {
    const { description, openDetailsPage } = props;
    return (
        <article className="movie">
            <a href={`#/film/${description.id}`} onClick={() => openDetailsPage(description)}>
                <img src={description.poster_path} alt="" className="movie__image" />
            </a>
            <EditMovie description={description} />
            <div className="movie__description">
                <div>
                    <h2 className="movie__title">{description.title}</h2>
                </div>
                <p className="movie__year">{description.release_date.slice(0, 4)}</p>
            </div>
        </article>
    )
}

Movie.propTypes = {
    description: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
}

export default Movie;