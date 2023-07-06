import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
<<<<<<< HEAD
import Review from '../../components/Admin/Review/Review';
=======
import Review from '../../components/Admin/review/review';
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09

describe('Product Review Component', () => {
    render(<MemoryRouter><Review /></MemoryRouter>);

    test('fe_react_reviewProduct', () => {
        const customerName = screen.queryByTestId('customerName');

        expect(customerName).toBeTruthy();
    })
    
})