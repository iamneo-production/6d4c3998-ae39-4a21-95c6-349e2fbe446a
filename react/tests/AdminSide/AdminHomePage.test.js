<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminHomePage from '../../components/Admin/AdminHomePage/AdminHomePage';
import { MemoryRouter } from 'react-router';

describe('Home Page', () => {
  test('fe_react_adminHomePage', () => {
    render(<MemoryRouter><AdminHomePage /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const amount = screen.getByTestId('amount');

    expect(customerName).toBeTruthy();
    expect(amount).toBeTruthy();
  });
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminHomePage from '../../components/Admin/AdminHomePage/AdminHomePage';
import { MemoryRouter } from 'react-router';

describe('Home Page', () => {
  test('fe_react_adminHomePage', () => {
    render(<MemoryRouter><AdminHomePage /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const amount = screen.getByTestId('amount');

    expect(customerName).toBeTruthy();
    expect(amount).toBeTruthy();
  });
>>>>>>> 9068e510ee26f0d17bfae99e0ed3c46ee330ee24
});