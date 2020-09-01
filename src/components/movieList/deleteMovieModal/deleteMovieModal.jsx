import React from 'react';
import ModalHOC from '../../hoc/modalHOC';

const DeleteMovieModal = () => {
    return (
        <React.Fragment>
            <h2>Delete Movie</h2>
            <div className="modal_field">
                <p>Are tou sure you want to delete this movie?</p>
            </div>
            <div className="modal_buttons_container">
                <button className="button button_reverse">Cancel</button>
                <button className="button">Confirm</button>
            </div>
        </React.Fragment>
    )
}

export default ModalHOC(DeleteMovieModal);