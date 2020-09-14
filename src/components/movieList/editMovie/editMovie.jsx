import React, { useState } from 'react';
import EditMovieMenu from '../editMovieMenu/index';
import movie_edit from './movie_edit.scss';

const EditMovie = (props) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);


    // const handleClick = () => {
    //     setIsModalOpen(!isModalOpen);
    // }

    const useToggle = (initialState) => {
        const [value, setValue] = useState(initialState);

        const toggle = () => {
            setValue(!value);
        }
        return [value, toggle];
    };

    const [isModalOpen, setIsModalOpen] = useToggle(false);

    const { description } = props;
    return (
        <React.Fragment>
            <div className="movie_edit" onClick={setIsModalOpen} >
                <span></span>
            </div>
            {isModalOpen && <EditMovieMenu handleClick={setIsModalOpen} description={description} />}
        </React.Fragment>
    )
}

export default EditMovie;