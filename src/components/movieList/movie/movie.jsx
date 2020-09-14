import React from 'react';
import PropTypes from 'prop-types';
import EditMovie from '../editMovie/index';
import movie from './movie.scss';

const Movie = (props) => {
    const { description, openDetailsPage } = props;
    return (
        <article className="movie" onClick={() => openDetailsPage(description)}>
            <img src={description.img} alt="" className="movie__image" />
            <EditMovie description={description} />
            <div className="movie__description">
                <div>
                    <h2 className="movie__title">{description.title}</h2>
                    <p className="movie__category">{description.type}</p>
                </div>
                <p className="movie__year">{description.year}</p>
            </div>
        </article>
    )
}

Movie.propTypes = {
    description: PropTypes.shape({
        img: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
}

export default Movie;