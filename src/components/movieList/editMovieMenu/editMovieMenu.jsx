import React, { useState } from 'react';
import EditMovieModal from '../editMovieModal/index';
import DeleteMovieModal from '../deleteMovieModal/index';
import edit_movie_menu from './edit_movie_menu.scss'

const EditMovieMenu = (props) => {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleSelect = (e) => {
        if (e.target.dataset.name === "editModal") {
            setEditModal(!editModal);
        } else {
            setDeleteModal(true);
        }

    }

    // const [isModalOpen, setIsModalOpen] = useState(false);


    // const handleClick = () => {
    //     setIsModalOpen(!isModalOpen);
    // }

    const { handleClick, description } = props;

    return (
        <React.Fragment>
            {!editModal && !deleteModal &&
                (<div className="movie_edit_menu" tabIndex={0}>
                    <span className="movie_edit_menu_close" onClick={handleClick} ></span>
                    <div className="movie_edit_menu_item">
                        <span data-name="editModal" onClick={(e) => handleSelect(e)}>Edit</span>
                    </div>
                    <div className="movie_edit_menu_item">
                        <span data-name="deleteModal" onClick={(e) => handleSelect(e)}>Delete</span>
                    </div>
                </div>)
            }
            {editModal && <EditMovieModal handleClick={handleClick} description={description} />}
            {deleteModal && <DeleteMovieModal handleClick={handleClick} />}
        </React.Fragment>
    )
}

export default EditMovieMenu;