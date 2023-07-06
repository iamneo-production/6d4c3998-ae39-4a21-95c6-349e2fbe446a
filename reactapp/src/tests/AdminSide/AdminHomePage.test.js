import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
<<<<<<< HEAD
import AdminHomePage from '../../components/Admin/AdminHomePage/AdminHomePage';
=======
import AdminHomePage from '../../components/Admin/adminhomepage/adminhomepage';
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
import { MemoryRouter } from 'react-router';

describe('Home Page', () => {
  test('fe_react_adminHomePage', () => {
    render(<MemoryRouter><AdminHomePage /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const amount = screen.getByTestId('amount');

    expect(customerName).toBeTruthy();
    expect(amount).toBeTruthy();
  });
});