import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../index';

describe('Footer', () => {
    it('should render Footer', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment(<Footer />)).toMatchSnapshot();
    })
})