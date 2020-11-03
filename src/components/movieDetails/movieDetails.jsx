import React, { useEffect } from 'react';
import chevron from '../../styles/img/chevron.png';
import { getMovieById } from '../../redux/actions';
import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import movie_details from './movie_details.scss';

const MovieDetails = (props) => {
    let { id } = useParams();
    useEffect(() => {
        store.dispatch(getMovieById(id));
    }, [id]);

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
                    {(<div className="description_body">
                        <article className="description_image">
                            <img src={props.movieDetails ? props.movieDetails.poster_path : ''} alt="cover" />
                        </article>
                        <div className="description_wrapper">
                            <div className="description_wrapper_title">
                                <h2 className="description_title">{props.movieDetails ? props.movieDetails.title : ''}</h2>
                                <div className="description_rate">
                                    <span>{props.movieDetails ? props.movieDetails.vote_average : ''}</span>
                                </div>
                            </div>
                            <p className="description_short_overview"> Short Overview</p>
                            <div className="description_wrapper_date">
                                <div className="description_date">{props.movieDetails.id ? props.movieDetails.release_date.slice(0, 4) : ''}</div>
                                <div className="description_time">{props.movieDetails ? `${props.movieDetails.runtime} min` : ''}</div>
                            </div>
                            <p className="description_overview">{props.movieDetails ? props.movieDetails.overview : ''}</p>
                        </div>
                    </div>)}
                </div>
            </div >
        </div>
    )
}
const mapStateToProps = (store) => {
    return {
        movieDetails: store.homePage.movieDetails,
    }
};

export default connect(mapStateToProps)(MovieDetails);
