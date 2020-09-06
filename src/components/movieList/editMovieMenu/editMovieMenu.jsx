import React from 'react';
import EditMovieModal from '../editMovieModal/index';
import DeleteMovieModal from '../deleteMovieModal/index';
import edit_movie_menu from './edit_movie_menu.scss'

class EditMovieMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModal: false,
            deleteModal: false,
        }
    }

    handleSelect = (e) => {
        this.setState({
            [e.target.dataset.name]: true,
        })
    }

    // handleBlur = (e) => {
    //     this.setState({ isModalOpen: false });
    // }

    // handleClickOutside = (e) => {
    //     if (!this.node.contains(e.target)) {
    //         this.props.handleClick();
    //     })
    // }

    render() {
        const { handleClick, description } = this.props;
        const { editModal, deleteModal } = this.state;
        return (
            <React.Fragment>
                {!editModal && !deleteModal &&
                    (<div className="movie_edit_menu" tabIndex={0} onBlur={this.handleBlur}>
                        <span className="movie_edit_menu_close" onClick={handleClick} ></span>
                        <div className="movie_edit_menu_item">
                            <span data-name="editModal" onClick={(e) => this.handleSelect(e)}>Edit</span>
                        </div>
                        <div className="movie_edit_menu_item">
                            <span data-name="deleteModal" onClick={(e) => this.handleSelect(e)}>Delete</span>
                        </div>
                    </div>)
                }
                {editModal && <EditMovieModal handleClick={handleClick} description={description} />}
                {deleteModal && <DeleteMovieModal handleClick={handleClick} />}
            </React.Fragment>
        )
    }
}

export default EditMovieMenu;