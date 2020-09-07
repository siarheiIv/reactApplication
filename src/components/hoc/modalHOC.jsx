import React from 'react';
import modal_movie from '../../styles/modal_movie.scss';
import button from '../../styles/button.scss';

const ModalHOC = (WrappedComponent) => {
    return class newMovieModal extends React.Component {
        render() {
            const { handleClick, description } = this.props;
            return (
                <div className="modal_overlay">
                    <div className="modal_body">
                        <div className="modal-close" onClick={handleClick}></div>
                        <div className="modal_wrapper">
                            <WrappedComponent description={description} handleClick={handleClick} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ModalHOC;