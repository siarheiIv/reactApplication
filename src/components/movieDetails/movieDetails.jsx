import React from 'react';
import chevron from '../../styles/img/chevron.png';
import movie_details from './movie_details.scss';

export default function MovieDetails(props) {
    const { currentMovie } = props;
    console.log(currentMovie.genres)
    return (
        <div className="description">
            <div className="description_container">
                <div className="wrapper">
                    <div className="description_logo">
                        <a href="#" className="logo">netflixroulette</a>
                        <a href="#/" >
                            <input type="image" src={chevron} />
                        </a>
                    </div>
                    <div className="description_body">
                        <article className="description_image">
                            <img src={currentMovie.poster_path} alt="cover" />
                        </article>
                        <div className="description_wrapper">
                            <div className="description_wrapper_title">
                                <h2 className="description_title" dangerouslySetInnerHTML={{ __html: currentMovie.title }} />
                                <div className="description_rate">
                                    <span dangerouslySetInnerHTML={{ __html: currentMovie.vote_average }} />
                                </div>
                            </div>
                            <p className="description_short_overview"> Short Overview</p>
                            <div className="description_wrapper_date">
                                <div className="description_date" dangerouslySetInnerHTML={{ __html: currentMovie.release_date.slice(0, 4) }} />
                                <div className="description_time">{`${currentMovie.runtime} min`}</div>
                            </div>
                            <p className="description_overview" dangerouslySetInnerHTML={{ __html: currentMovie.overview }} />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
