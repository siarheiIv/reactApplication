import React from 'react';
import movie_filter from './movie_filter.scss';

const MovieFilter = (props) => {
    return (
        <div>
            <label htmlFor="film-sorting">Sort by </label>
            <select name="film-sorting" id="film-sorting" className="film-sorting" onChange={(e) => props.handleChange(e)} >
                <option value="default" hidden>Select a filter</option>
                <option value="date">Release Date</option>
                <option value="name">Name</option>
            </select>
        </div>
    )
}

export default MovieFilter;