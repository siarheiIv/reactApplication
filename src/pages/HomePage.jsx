import React from 'react';
import moment from 'moment';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import MovieList from '../components/movieList/index';

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filmList: [],
            defaultList: [],
            selectedTabIndex: 0,
        }
    }

    componentDidMount() {
        this.setState({
            filmList: [
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: '2000-11-11', type: 'Crime', runtime: '2:01:15', id: 0 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Avatar', year: '2010-12-11', type: 'Documentary', runtime: '2:11:55', id: 1 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Sex and the City', year: '2003-09-10', type: 'Comedy', runtime: '1:47:01', id: 2 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'The Grinch', year: '1998-02-10', type: 'Horror', runtime: '2:09:30', id: 3 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bride Wars', year: '2012-12-01', type: 'Comedy', runtime: '2:14:07', id: 4 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Like a boss', year: '2018-03-08', type: 'Crime', runtime: '1:31:47', id: 5 }
            ],
            defaultList: [
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: '2000-11-11', type: 'Crime', runtime: '2:01:15', id: 0 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Avatar', year: '2010-12-11', type: 'Documentary', runtime: '2:11:55', id: 1 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Sex and the City', year: '2003-09-10', type: 'Comedy', runtime: '1:47:01', id: 2 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'The Grinch', year: '1998-02-10', type: 'Horror', runtime: '2:09:30', id: 3 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bride Wars', year: '2012-12-01', type: 'Comedy', runtime: '2:14:07', id: 4 },
                { img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Like a boss', year: '2018-03-08', type: 'Crime', runtime: '1:31:47', id: 5 }
            ],
        })
    }

    sortByTabClick = (e, films) => {
        if (e.target.dataset.tab === 'all') {
            return films;
        } else {
            return films.filter(film => film.type.toLowerCase() === e.target.dataset.tab);
        }
    }

    sortFilmsByName = (films) => {
        return films.sort((a, b) => { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0 });
    }

    sortFilmsByYear = (films) => {
        return films.sort(function (a, b) {
            return moment(b.year) - moment(a.year);
        });
    }

    sortFilmsByGenre = (films) => {
        this.setState({
            filmList: films,
        })
    }

    handleTabClick = (e, index) => {
        const { defaultList, filmList } = this.state;
        this.setState({
            selectedTabIndex: index,
            // filmList: defaultList,
        })
        this.sortFilmsByGenre(this.sortByTabClick(e, defaultList));
    }

    handleChange = (e) => {
        const { filmList } = this.state;
        if (e.target.options[e.target.selectedIndex].value === 'name') {
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
        const { filmList, defaultList, selectedTabIndex } = this.state;
        return (
            <div>
                <Header />
                <MovieList
                    filmList={filmList}
                    handleChange={this.handleChange}
                    handleTabClick={this.handleTabClick}
                    selectedTabIndex={selectedTabIndex}
                />
                <Footer />
            </div>
        )
    }
}

export default HomePage;