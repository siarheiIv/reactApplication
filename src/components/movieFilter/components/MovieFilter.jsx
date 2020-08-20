import React from 'react';

const MovieFilter = () => {
    return(
            <select name="film-sorting" id="film-sorting">
                <option value="volvo">Release Date</option>
                <option value="saab">Raiting</option>
            </select>
    )
}

export default MovieFilter;