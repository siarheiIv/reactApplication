import React from 'react';
import '../src/styles/base.scss';
import '../src/styles/button.scss';
import '../src/styles/logo.scss';
import '../src/styles/main.scss';
import '../src/styles/normalize.scss';
import '../src/styles/modal_movie.scss';
import '../src/styles/not_found.scss';
import '../src/styles/variables.scss';
import '../src/styles/movie_founded.scss';
import '../src/components/footer/footer.scss';
import '../src/components/movieDetails/movie_details.scss';
import '../src/components/movieFilter/movie_filter.scss';
import '../src/components/header/header.scss';
import '../src/components/header/searchBar/search_bar.scss';
import '../src/components/movieList/editMovieMenu/edit_movie_menu.scss';
import '../src/components/movieList/editMovieModal/form.scss';
import '../src/components/movieList/editMovie/movie_edit.scss';
import '../src/components/movieList/movie/movie.scss';
import '../src/components/movieList/movies_list.scss';



export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}