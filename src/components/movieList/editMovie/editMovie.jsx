import React, { useState } from 'react';
import EditMovieMenu from '../editMovieMenu/index';
import movie_edit from './movie_edit.scss';

const EditMovie = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    const { description } = props;
    return (
        <React.Fragment>
            <div className="movie_edit" onClick={handleClick} >
                <span></span>
            </div>
            {isModalOpen && <EditMovieMenu handleClick={handleClick} description={description} />}
        </React.Fragment>
    )
}

export default EditMovie;