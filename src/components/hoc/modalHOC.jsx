import React, { useRef } from 'react';

const ModalHOC = (WrappedComponent) => function newMovieModal(props) {
  const modalRef = useRef('');
  const { handleClick, description } = props;
  // const closeModal = (e) => {
  //     if (modalRef.current.contains(e.target)) {
  //         return;
  //     } else {
  //         handleClick();
  //     }
  // }

  return (
            // <div className="modal_overlay" onClick={(e) => closeModal(e)}>
            <div className="modal_overlay">
                <div ref={modalRef} className="modal_body">
                    <div className="modal-close" onClick={handleClick}></div>
                    <div className="modal_wrapper">
                        <WrappedComponent description={description} handleClick={handleClick} />
                    </div>
                </div>
            </div>
  );
};

export default ModalHOC;
