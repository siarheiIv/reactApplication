import React from 'react';
import Tabs from '../movieTabs/index';
import MovieFilter from '../movieFilter/index';
import Movie from './movie/index';
import CheckMovie from '../common/index';
import movie_founded from './styles/movie_founded';
import movies_list from './movies_list';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmList: [],
        }

    }

    componentDidMount() {
        this.setState({
            filmList: [
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 0 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Avatar', year: 2010, type: 'Fantasy', id: 1 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Sex and the City', year: 2003, type: 'Romance', id: 2 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'The Grinch', year: 1998, type: 'Animation', id: 3 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bride Wars', year: 2012, type: 'Comedy', id: 4 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Like a boss', year: 2018, type: 'Comedy', id: 5 }
            ],
        })
    }

    sortFilmsByName = (filmList) => {
        return filmList.sort((a, b) => { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0 });
    }

    sortFilmsByYear = (filmList) => {
        return filmList.sort((a, b) => a.year - b.year);
    }

    handleChange = (e) => {
        const { filmList } = this.state;
        if (e.target.options[e.target.selectedIndex].value === 'name') {
            console.log(this.sortFilmsByYear(filmList))
            this.setState({
                filmList: this.sortFilmsByName(filmList)
            })
        } else {
            this.setState({
                filmList: this.sortFilmsByYear(filmList)
            })
        }
    }

    render() {
        const { filmList } = this.state;
        return (
            <main>
                <div className="wrapper">
                    <CheckMovie>
                        <div className="sort-line">
                            <Tabs />
                            <MovieFilter handleChange={this.handleChange} />
                        </div>
                        <p className="sort-line__movies-num">
                            7 movies found
                        </p>
                        <div className="movies-list">
                            {
                                filmList.map(movie => <Movie key={movie.id} description={movie} />)
                            }
                        </div>
                        {/* <div className="no-movies">
                            <p className="no-movies__title">No films found</p>
                        </div> */}
                    </CheckMovie>
                </div>
            </main>
        )
    }
}

export default MovieList;