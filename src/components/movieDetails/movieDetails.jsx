import React from 'react';
import chevron from '../../styles/img/chevron.png';
import movie_details from './movie_details.scss';

export default function MovieDetails(props) {
    const { currentMovie, closeDetailsPage } = props;
    return (
        <div className="description">
            <div className="description_container">
                <div className="wrapper">
                    <div className="description_logo">
                        <a href="#" className="logo">netflixroulette</a>
                        <input type="image" src={chevron} onClick={() => closeDetailsPage()} />
                    </div>
                    <div className="description_body">
                        <article className="description_image">
                            <img src={currentMovie.img} alt="cover" />
                        </article>
                        <div className="description_wrapper">
                            <div className="description_wrapper_title">
                                <h2 className="description_title">{currentMovie.title}</h2>
                                <div className="description_rate">
                                    <span>4.5</span>
                                </div>
                            </div>
                            <p className="description_short_overview"> Short Overview</p>
                            <div className="description_wrapper_date">
                                <div className="description_date">{currentMovie.year.slice(0, 4)}</div>
                                <div className="description_time">{`${currentMovie.runtime} min`}</div>
                            </div>
                            <p className="description_overview">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
