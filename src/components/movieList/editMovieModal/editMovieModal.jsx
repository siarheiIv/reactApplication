import React, { useState } from 'react';
import ModalHOC from '../../hoc/modalHOC';
import { addMovie, updateMovie } from '../../../redux/actions';
import { store } from '../../../redux/store';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { styles, theme1 } from './styles-material-ui';

const EditMovieModal = (props) => {
    const { description, classes, handleClick } = props;
    const [inputValues, setValues] = useState(
        {
            genres: description.genres,
            overview: description.overview,
            overview: description.overview,
            poster_path: description.poster_path,
            release_date: description.release_date,
            runtime: description.runtime,
            title: description.title,
            vote_average: description.vote_average,
        }
    );

    const handleChangeSelect = (e) => {
        setValues({ ...inputValues, genres: [...inputValues.genres, ...e.target.value] });
    };

    const handleAddMovie = () => {
        if (store.getState().homePage.movies.filter((movie) => movie.id === description.id).length) {
            store.dispatch(updateMovie(inputValues, description.id));
        } else {
            store.dispatch(addMovie(inputValues));
        }
        handleClick();
    }

    const handleInputChange = (e) => {
        if (e.target.name === 'vote_average' || e.target.name === 'runtime') {
            setValues({ ...inputValues, [e.target.name]: Number(e.target.value) });
        } else {
            setValues({ ...inputValues, [e.target.name]: e.target.value });
        }
    }

    const getGenres = (genres) => {
        return genres.toString();
    }

    return (
        <React.Fragment>
            <h2>Edit Movie</h2>
            <div className="modal_field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={inputValues.title} onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="modal_field release_date">
                <label htmlFor="release_date">Release Date</label>
                <TextField
                    InputProps={{ disableUnderline: true, className: classes.root_form_calendar_input }}
                    id="date"
                    type="date"
                    name="release_date"
                    value={inputValues.release_date}
                    onChange={handleInputChange}
                    classes={{ root: classes.root_form_calendar }}
                />
            </div>
            <div className="modal_field">
                <label htmlFor="movie_url">Image Url</label>
                <input type="text" name="poster_path" value={inputValues.poster_path} onChange={(e) => handleInputChange(e)} />
            </div>
            <FormControl classes={{ root: classes.root_container }} >
                <InputLabel htmlFor="genre" shrink={true} classes={{ root: classes.input_label }}>Genre</InputLabel>
                <MuiThemeProvider theme={theme1}>
                    <Select
                        multiple
                        disableUnderline
                        id="genre"
                        classes={{ root: classes.root_form_input }}
                        onChange={handleChangeSelect}
                        value={inputValues.genres}
                    >
                        <MenuItem value={'comedy'}>Comedy</MenuItem>
                        <MenuItem value={'drama'}>Drama</MenuItem>
                        <MenuItem value={'horror'}>Horror</MenuItem>
                    </Select>
                </MuiThemeProvider>
            </FormControl>
            <div className="modal_field">
                <label htmlFor="overview">Overview</label>
                <input type="text" name="overview" value={inputValues.overview} onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="modal_field">
                <label htmlFor="vote_average">Average Vote</label>
                <input type="text" name="vote_average" value={inputValues.vote_average} onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="modal_field">
                <label htmlFor="runtime">Runtime</label>
                <input type="text" name="runtime" value={inputValues.runtime} onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="modal_buttons_container">
                <button className="button button_reverse" onClick={handleClick}>Reset</button>
                <button className="button" onClick={handleAddMovie}>Save</button>
            </div>
        </React.Fragment >
    )
}

export default ModalHOC(withStyles(styles)(EditMovieModal));