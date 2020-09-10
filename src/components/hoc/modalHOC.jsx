import React, { useRef, useState } from 'react';
import modal_movie from '../../styles/modal_movie.scss';
import button from '../../styles/button.scss';

const ModalHOC = (WrappedComponent) => {

    return function newMovieModal(props) {
        const modalRef = useRef('');
        const closeModal = (e) => {
            if (modalRef.current.contains(e.target)) {
                return;
            } else {
                handleClick();
            }
        }
        const { handleClick, description } = props;
        return (
            <div className="modal_overlay" onClick={(e) => closeModal(e)}>
                <div ref={modalRef} className="modal_body">
                    <div className="modal-close" onClick={handleClick}></div>
                    <div className="modal_wrapper">
                        <WrappedComponent description={description} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalHOC;