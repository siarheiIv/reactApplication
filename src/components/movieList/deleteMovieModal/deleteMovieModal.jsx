import React from 'react';
import ModalHOC from '../../hoc/modalHOC';
import { deleteMovie } from '../../../redux/actions';
import store from '../../../redux/store';

const DeleteMovieModal = (props) => {
  const { description, handleClick } = props;

  const handleDeleteMovie = () => {
    store.dispatch(deleteMovie(description.id));
    handleClick();
  };

  return (
        <React.Fragment>
            <h2>Delete Movie</h2>
            <div className="modal_field">
                <p>Are tou sure you want to delete this movie?</p>
            </div>
            <div className="modal_buttons_container">
                <button className="button button_reverse" onClick={handleClick}>Cancel</button>
                <button className="button" onClick={handleDeleteMovie}>Confirm</button>
            </div>
        </React.Fragment>
  );
};

export default ModalHOC(DeleteMovieModal);
