import React from 'react';
import PropTypes from 'prop-types';
import movie from '../styles/movie.scss';

const Movie = (props) => {
    const { description } = props;
    return(
            <article className="movie">
                <img src={description.img} alt="" className="movie__image" />
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
        year: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
}

export default Movie;