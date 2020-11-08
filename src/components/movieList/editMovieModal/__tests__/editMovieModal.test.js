import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import EditMovieModal from '../editMovieModal';

describe('modal to add or delete films', () => {
    const handleClick = jest.fn();
    const description = {
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: '',
        vote_average: '',
    };

    beforeEach(() => {
        render(<EditMovieModal description={description} handleClick={handleClick} />);
    })

    // test('if render text', () => {
    //     const { getByText } = render(<EditMovieModal description={description} handleClick={handleClick} />);
    //     const element = getByText(/edit movie/i);
    //     expect(element).toBeInTheDocument();
    // });

    test('if render date label', () => {
        expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
    });

    test('if render image label', () => {
        expect(screen.getByLabelText(/image url/i)).toBeInTheDocument();
    });

    test('if render genres label', () => {
        expect(screen.getByLabelText(/genres/i)).toBeInTheDocument();
    });

    test('if render overview label', () => {
        expect(screen.getByLabelText('Overview')).toBeInTheDocument();
    });

    test('if render runtime label', () => {
        expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
    });

    test('if render vote label', () => {
        expect(screen.getByLabelText(/Average Vote/i)).toBeInTheDocument();
    });

    test('if data in the title field', async () => {
        await userEvent.type(screen.getByRole('textbox', { name: 'Title' }), 'New title')
        expect(screen.getByDisplayValue(/New title/i)).toBeInTheDocument();
    });

    test('if data in the title field', async () => {
        await userEvent.type(screen.getByRole('textbox', { name: 'Title' }), 'New title')
        expect(screen.getByDisplayValue(/New title/i)).toBeInTheDocument();
    });

    test('if data in the overview field', async () => {
        await userEvent.type(screen.getByRole('textbox', { name: 'Overview' }), 'New overview')
        expect(screen.getByDisplayValue(/New overview/i)).toBeInTheDocument();
    });

    test('if data paste in runtime field', async () => {
        await userEvent.paste(screen.getByRole('textbox', { name: 'Runtime' }), '100')
        expect(screen.getByDisplayValue(/100/)).toBeInTheDocument();
    });

    // test('if error message appears', async () => {
    //     await userEvent.type(screen.getByRole('textbox', { name: 'Runtime' }), '');
    //     await userEvent.type(screen.getByRole('textbox', { name: 'Overview' }), 'Some overview');
    //     expect(screen.getByDisplayValue(/Runtime is required/i)).toBeInTheDocument();
    // });
})