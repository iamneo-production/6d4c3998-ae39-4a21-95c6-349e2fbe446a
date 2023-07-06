import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
<<<<<<< HEAD
import ApprovalForm from '../../components/Admin/ApprovalForm/ApprovalForm';
=======
import ApprovalForm from '../../components/Admin/approvalform/approvalform';
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
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
});