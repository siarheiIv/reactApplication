import React from 'react';
import ModalHOC from '../../hoc/modalHOC';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { styles, theme1 } from './styles-material-ui';

class EditMovieModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            genres: [],
            date: this.props.description ? this.props.description.year : '',
        }
    }

    handleChangeSelect = (e) => {
        this.setState({
            genres: [...e.target.value],
        })
    }

    handleChange = (e) => {
        this.setState({
            date: e.target.value,
        })
    }


    render() {
        const { description, classes, handleClick } = this.props;

        return (
            <React.Fragment>
                <h2>Edit Movie</h2>
                <div className="modal_field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={description ? description.title : ''} />
                </div>
                <div className="modal_field release_date">
                    <label htmlFor="release_date">Release Date</label>
                    <TextField
                        InputProps={{ disableUnderline: true, className: classes.root_form_calendar_input }}
                        id="date"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        classes={{ root: classes.root_form_calendar }}
                    />
                </div>
                <div className="modal_field">
                    <label htmlFor="movie_url">Movie Url</label>
                    <input type="text" name="movie_url" />
                </div>
                <FormControl classes={{ root: classes.root_container }} >
                    <InputLabel htmlFor="genre" shrink={true} classes={{ root: classes.input_label }}>Genre</InputLabel>
                    <MuiThemeProvider theme={theme1}>
                        <Select
                            multiple
                            disableUnderline
                            id="genre"
                            classes={{ root: classes.root_form_input }}
                            onChange={this.handleChangeSelect}
                            value={this.state.genres}
                        >
                            <MenuItem value={'comedy'}>Comedy</MenuItem>
                            <MenuItem value={'drama'}>Drama</MenuItem>
                            <MenuItem value={'horror'}>Horror</MenuItem>
                        </Select>
                    </MuiThemeProvider>
                </FormControl>
                <div className="modal_field">
                    <label htmlFor="overview">Overview</label>
                    <input type="text" name="overview" />
                </div>
                <div className="modal_field">
                    <label htmlFor="runtime">Runtime</label>
                    <input type="text" name="runtime" value={description ? description.runtime : ''} />
                </div>
                <div className="modal_buttons_container">
                    <button className="button button_reverse" onClick={handleClick}>Reset</button>
                    <button className="button">Save</button>
                </div>
            </React.Fragment >
        )
    }
}

export default ModalHOC(withStyles(styles)(EditMovieModal));