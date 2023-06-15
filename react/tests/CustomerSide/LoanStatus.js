<<<<<<< HEAD
import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import LoanStatus from '../../components/Customer/LoanStatus/LoanStatus';


describe('Status', () => {
    
    render(<MemoryRouter><LoanStatus /></MemoryRouter>)

    test('fe_react_customerLoanStatus', () => {
       const  loanStatus = screen.queryByTestId('loanStatus');
	   
	   expect(loanStatus).toBeTruthy();
    })

=======
import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import LoanStatus from '../../components/Customer/LoanStatus/LoanStatus';


describe('Status', () => {
    
    render(<MemoryRouter><LoanStatus /></MemoryRouter>)

    test('fe_react_customerLoanStatus', () => {
       const  loanStatus = screen.queryByTestId('loanStatus');
	   
	   expect(loanStatus).toBeTruthy();
    })

>>>>>>> 9068e510ee26f0d17bfae99e0ed3c46ee330ee24
})