import homePage from '../homePage';
import {
  GET_ALL_FILMS_FOR_RENDER,
  SELECTED_TAB_INDEX,
  UPDATE_SEARCH_TERM,
  ADD_MOVIE,
   UPDATE_MOVIE,
  GET_MOVIE,
} from '../../actions';

describe('Homepage reducer', () => {
  test('should return initial state', () => {
    const initReducer = homePage(undefined, {});
    expect(initReducer).toEqual(
      {
        movies: [],
        movieDetails: {},
        sortBy: '',
        selectedTabIndex: 0,
        searchTerm: '',
        filter: '',
        offset: 0,
      },
    );
  });

  test('should handle GET_ALL_FILMS_FOR_RENDER', () => {
    expect(homePage(undefined, {
      type: GET_ALL_FILMS_FOR_RENDER,
      data: [
        {
          id: 1,
          title: 'Titanic',
          tagline: 'Tagline',
          vote_average: 8,
          vote_count: 837,
          release_date: '2010-10-10',
          poster_path: 'https://image.jpg',
          overview: 'Overview',
          budget: 10000,
          revenue: 0,
          genres: ['Drama'],
          runtime: 150,
        },
      ],
      searchTerm: 'Titanic',
      sortBy: 'title',
      filter: '',
      offset: 0,
      shouldUpdateState: true,
    })).toEqual(
      {
        movies: [
          {
            id: 1,
            title: 'Titanic',
            tagline: 'Tagline',
            vote_average: 8,
            vote_count: 837,
            release_date: '2010-10-10',
            poster_path: 'https://image.jpg',
            overview: 'Overview',
            budget: 10000,
            revenue: 0,
            genres: ['Drama'],
            runtime: 150,
          },
        ],
        movieDetails: {},
        sortBy: 'title',
        selectedTabIndex: 0,
        searchTerm: 'Titanic',
        filter: '',
        offset: 0,
      },
    );
  });

  test('should handle SELECTED_TAB_INDEX', () => {
    expect(homePage(undefined, {
      type: SELECTED_TAB_INDEX,
      payload: 1,
    })).toEqual(
      {
        movies: [],
        movieDetails: {},
        sortBy: '',
        selectedTabIndex: 1,
        searchTerm: '',
        filter: '',
        offset: 0,
      },
    );
  });
  expect(homePage(undefined, {
    type: SELECTED_TAB_INDEX,
    payload: 0,
  })).toEqual(
    {
      movies: [],
      movieDetails: {},
      sortBy: '',
      selectedTabIndex: 0,
      searchTerm: '',
      filter: '',
      offset: 0,
    },
  );
});

test('should handle UPDATE_SEARCH_TERM', () => {
  expect(homePage(undefined, {
    type: UPDATE_SEARCH_TERM,
    payload: 'the term',
  })).toEqual(
    {
      movies: [],
      movieDetails: {},
      sortBy: '',
      selectedTabIndex: 0,
      searchTerm: 'the term',
      filter: '',
      offset: 0,
    },
  );
});

test('should handle GET_MOVIE', () => {
  expect(homePage(undefined, {
    type: GET_MOVIE,
    data: {
      id: 19,
      title: 'Metropolis',
      tagline: 'There can be no understanding…mediator.',
      vote_average: 8,
      vote_count: 837,
      release_date: '1927-01-10',
      poster_path: 'https://image.jpg',
      overview: 'Overview',
      budget: 10000,
      revenue: 650422,
      genres: ['Drama', 'Science Fiction'],
      runtime: 100,
    },
  })).toEqual(
    {
      movies: [],
      movieDetails: {
        id: 19,
        title: 'Metropolis',
        tagline: 'There can be no understanding…mediator.',
        vote_average: 8,
        vote_count: 837,
        release_date: '1927-01-10',
        poster_path: 'https://image.jpg',
        overview: 'Overview',
        budget: 10000,
        revenue: 650422,
        genres: ['Drama', 'Science Fiction'],
        runtime: 100,
      },
      sortBy: '',
      selectedTabIndex: 0,
      searchTerm: '',
      filter: '',
      offset: 0,
    },
  );
});

test('should handle ADD_MOVIE', () => {
  expect(homePage(undefined, {
    type: ADD_MOVIE,
    payload: {
      id: 19,
      title: 'Metropolis',
      tagline: 'There can be no understanding…mediator.',
      vote_average: 8,
      vote_count: 837,
      release_date: '1927-01-10',
      poster_path: 'https://image.jpg',
      overview: 'Overview',
      budget: 10000,
      revenue: 650422,
      genres: ['Drama', 'Science Fiction'],
      runtime: 100,
    },
  })).toEqual(
    {
      movies: [
        {
          id: 19,
          title: 'Metropolis',
          tagline: 'There can be no understanding…mediator.',
          vote_average: 8,
          vote_count: 837,
          release_date: '1927-01-10',
          poster_path: 'https://image.jpg',
          overview: 'Overview',
          budget: 10000,
          revenue: 650422,
          genres: ['Drama', 'Science Fiction'],
          runtime: 100,
        },
      ],
      movieDetails: {},
      sortBy: '',
      selectedTabIndex: 0,
      searchTerm: '',
      filter: '',
      offset: 0,
    },
  );
});

test('should handle UPDATE_MOVIE', () => {
  const initState = {
    movies: [
      {
        id: 19,
        title: '',
        tagline: '',
        vote_average: 10,
        vote_count: 837,
        release_date: '2000-01-10',
        poster_path: 'https://image.jpg',
        overview: '',
        budget: 0,
        revenue: 0,
        genres: [],
        runtime: 0,
      },
    ],
    movieDetails: {},
    sortBy: '',
    selectedTabIndex: 0,
    searchTerm: '',
    filter: '',
    offset: 0,
  };

  expect(homePage(initState, {
    type: UPDATE_MOVIE,
    payload: {
      id: 19,
      title: 'Metropolis',
      tagline: 'There can be no understanding…mediator.',
      vote_average: 8,
      vote_count: 837,
      release_date: '1927-01-10',
      poster_path: 'https://image.jpg',
      overview: 'Overview',
      budget: 10000,
      revenue: 650422,
      genres: ['Drama', 'Science Fiction'],
      runtime: 100,
    },
    id: 19,
  })).toEqual(
    {
      movies: [
        {
          id: 19,
          title: 'Metropolis',
          tagline: 'There can be no understanding…mediator.',
          vote_average: 8,
          vote_count: 837,
          release_date: '1927-01-10',
          poster_path: 'https://image.jpg',
          overview: 'Overview',
          budget: 10000,
          revenue: 650422,
          genres: ['Drama', 'Science Fiction'],
          runtime: 100,
        },
      ],
      movieDetails: {},
      sortBy: '',
      selectedTabIndex: 0,
      searchTerm: '',
      filter: '',
      offset: 0,
    },
  );
});
