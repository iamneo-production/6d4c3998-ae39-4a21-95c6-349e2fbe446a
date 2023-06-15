<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApprovalForm from '../../components/Admin/ApprovalForm/ApprovalForm';
import { MemoryRouter } from 'react-router';

describe('AddDetails', () => {
  test('fe_react_adminAddCenter', () => {
    render(<MemoryRouter><ApprovalForm /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const amount = screen.getByTestId('amount');
    const dueMonths = screen.getByTestId('dueMonths');
    const approveButton = screen.getByTestId('approveButton');

    expect(customerName).toBeTruthy();
    expect(amount).toBeTruthy();
    expect(dueMonths).toBeTruthy();
    expect(approveButton).toBeTruthy();

  });
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApprovalForm from '../../components/Admin/ApprovalForm/ApprovalForm';
import { MemoryRouter } from 'react-router';

describe('AddDetails', () => {
  test('fe_react_adminAddCenter', () => {
    render(<MemoryRouter><ApprovalForm /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const amount = screen.getByTestId('amount');
    const dueMonths = screen.getByTestId('dueMonths');
    const approveButton = screen.getByTestId('approveButton');

    expect(customerName).toBeTruthy();
    expect(amount).toBeTruthy();
    expect(dueMonths).toBeTruthy();
    expect(approveButton).toBeTruthy();

  });
>>>>>>> 9068e510ee26f0d17bfae99e0ed3c46ee330ee24
});