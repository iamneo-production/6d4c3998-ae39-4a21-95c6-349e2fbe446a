<<<<<<< HEAD
import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/Admin/Review/Review';

describe('Product Review Component', () => {
    render(<MemoryRouter><Review /></MemoryRouter>);

    test('fe_react_reviewProduct', () => {
        const customerName = screen.queryByTestId('customerName');

        expect(customerName).toBeTruthy();
    })
    
=======
import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/Admin/Review/Review';

describe('Product Review Component', () => {
    render(<MemoryRouter><Review /></MemoryRouter>);

    test('fe_react_reviewProduct', () => {
        const customerName = screen.queryByTestId('customerName');

        expect(customerName).toBeTruthy();
    })
    
>>>>>>> 9068e510ee26f0d17bfae99e0ed3c46ee330ee24
})