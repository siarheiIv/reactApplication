import React from 'react';
import EditMovieMenu from '../editMovieMenu/index';
import movie_edit from './movie_edit.scss';

class EditMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    handleClick = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        return (
            <React.Fragment>
                <div className="movie_edit" onClick={this.handleClick} >
                    <span></span>
                </div>
                {isModalOpen && <EditMovieMenu handleClick={this.handleClick} />}
            </React.Fragment>
        )
    }
}

export default EditMovie;