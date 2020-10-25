import React, { useState } from 'react';
import ModalHOC from '../../hoc/modalHOC';
import { addMovie, updateMovie } from '../../../redux/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { store } from '../../../redux/store';
import form from './form';
import { Button, MenuItem } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { styles, theme1 } from './styles-material-ui';

const EditMovieModal = (props) => {
    const { description, classes, handleClick } = props;
    const [inputValues, setValues] = useState(
        {
            title: description.title,
            release_date: description.release_date,
            poster_path: description.poster_path,
            genres: description.genres,
            overview: description.overview,
            runtime: description.runtime,
            vote_average: description.vote_average,
        }
    );

    console.log(inputValues.genres)

    const handleAddMovie = (list) => {
        const values = { ...list, runtime: Number(list.runtime), vote_average: Number(list.vote_average) };
        if (store.getState().homePage.movies.filter((movie) => movie.id === description.id).length) {
            store.dispatch(updateMovie(values, description.id));
        } else {
            store.dispatch(addMovie(values));
        }
        handleClick();
    }

    const validationSchema = Yup.object({
        genres: Yup.array(Yup.string()).required('Genres field must have 1 option'),
        overview: Yup.string().required('Overview is required'),
        poster_path: Yup.string().url('Invalid url address').required('Image URL is required'),
        release_date: Yup.string().required('Date is required'),
        runtime: Yup.number().typeError('The average vote must be a number').required('Runtime is required')
            .min(0, 'The runtime must be more or equal to 0').max(10000, 'The runtime must be less or equal to 10000'),
        title: Yup.string().required('Title is required'),
        vote_average: Yup.number().typeError('The average vote must be a number').required('The average vote is required')
            .min(0, 'The average vote must be more or equal to 0').max(10, 'The average vote must be less or equal to 10'),
    });

    return <Formik initialValues={inputValues} validationSchema={validationSchema} onSubmit={(values) => handleAddMovie(values)}>
        {
            ({ isSubmitting }) => {
                return <Form>
                    <h2>Edit Movie</h2>
                    <div className="modal_field">
                        <label htmlFor="title">Title</label>
                        <Field
                            autoComplete="off"
                            name="title"
                            type="text"
                        />
                        <ErrorMessage name="title" render={msg => <div className="error_message" >{msg}</div>} />
                    </div>
                    <div className="modal_field release_date">
                        <label htmlFor="release_date">Release Date</label>
                        <Field
                            autoComplete="off"
                            name="release_date"
                            type="date"
                        />
                        <ErrorMessage name="release_date" render={msg => <div className="error_message" >{msg}</div>} />
                    </div>
                    <div className="modal_field">
                        <label htmlFor="poster_path">Image Url</label>
                        <Field
                            autoComplete="off"
                            name="poster_path"
                            type="text"
                        />
                        <ErrorMessage name="poster_path" render={msg => <div className="error_message" >{msg}</div>} />
                    </div>
                    <div className="modal_field">
                        <label htmlFor="poster_path">Genres</label>
                        <MuiThemeProvider theme={theme1}>
                            <Field
                                InputProps={{ disableUnderline: true }}
                                SelectProps={{ multiple: true }}
                                select
                                as={TextField}
                                name="genres"
                                classes={{ root: classes.select }}
                            >
                                <MenuItem value={'Action'}>Action</MenuItem>
                                <MenuItem value={'Adventure'}>Adventure</MenuItem>
                                <MenuItem value={'Animation'}>Animation</MenuItem>
                                <MenuItem value={'Family'}>Family</MenuItem>
                                <MenuItem value={'Drama'}>Drama</MenuItem>
                                <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                                <MenuItem value={'Romance'}>Romance</MenuItem>
                                <MenuItem value={'Science fiction'}>Science Fiction'</MenuItem>
                            </Field>
                            <ErrorMessage name="genres" render={msg => <div className="error_message" >{msg}</div>} />
                        </MuiThemeProvider>
                    </div>
                    <div className="modal_field">
                        <label htmlFor="overview">Overview</label>
                        <Field
                            autoComplete="off"
                            name="overview"
                            type="text"
                        />
                        <ErrorMessage name="overview" render={msg => <div className="error_message" >{msg}</div>} />
                    </div>
                    <div className="modal_field">
                        <label htmlFor="vote_average">Average Vote</label>
                        <Field
                            autoComplete="off"
                            name="vote_average"
                            type="text"
                        />
                        <ErrorMessage name="vote_average" render={msg => <div className="error_message" >{msg}</div>} />
                    </div>
                    <div className="modal_field">
                        <label htmlFor="runtime">Runtime</label>
                        <Field
                            autoComplete="off"
                            name="runtime"
                            type="text"
                        />
                        <ErrorMessage name="runtime" render={msg => <div className="error_message" >{msg}</div>} />
                    </div>
                    <div className="modal_buttons_container">
                        <button className="button button_reverse" onClick={handleClick}>Reset</button>
                        <Button
                            classes={{ root: classes.button }}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            }
        }
    </Formik>
}

export default ModalHOC(withStyles(styles)(EditMovieModal));