import React from 'react';

const MovieFilter = (props) => {
    return (
        <div>
            <label htmlFor="film-sorting">Sort by </label>
            <select name="film-sorting" id="film-sorting" className="film-sorting" onChange={(e) => props.handleChange(e)} >
                <option value="date">Release Date</option>
                <option value="title">Name</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    )
}

export default MovieFilter;