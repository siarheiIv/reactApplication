import React from 'react';

const MovieFilter = () => {
    return(
        <div>
            <label htmlFor="film-sorting">Sort by </label>
            <select name="film-sorting" id="film-sorting">
                <option value="volvo">Release Date</option>
                <option value="saab">Raiting</option>
            </select>
        </div>
    )
}

export default MovieFilter;