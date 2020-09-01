import React from 'react';
import ModalHOC from '../../hoc/modalHOC';

const EditMovieModal = () => {
    return (
        <React.Fragment>
            <h2>Edit Movie</h2>
            <div className="modal_field">
                <label htmlFor="movie_id">Movie ID</label>
                <p name="movie_id">5647547</p>
            </div>
            <div className="modal_field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
            </div>
            <div className="modal_field release_date">
                <label htmlFor="release_date">Release Date</label>
                <i className="calendar"></i>
                <input type="text" name="release_date" />
            </div>
            <div className="modal_field">
                <label htmlFor="movie_url">Movie Url</label>
                <input type="text" name="movie_url" />
            </div>
            <div className="modal_field">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genre">
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror</option>
                </select>
            </div>
            <div className="modal_field">
                <label htmlFor="overview">Overview</label>
                <input type="text" name="overview" />
            </div>
            <div className="modal_field">
                <label htmlFor="runtime">Runtime</label>
                <input type="text" name="runtime" />
            </div>
            <div className="modal_buttons_container">
                <button className="button button_reverse">Reset</button>
                <button className="button">Save</button>
            </div>
        </React.Fragment>
    )
}

export default ModalHOC(EditMovieModal);