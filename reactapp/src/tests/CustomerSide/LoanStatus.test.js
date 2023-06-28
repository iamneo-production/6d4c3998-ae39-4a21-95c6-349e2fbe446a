import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import LoanStatus from '../../components/Customer/loanstatus/loanstatus';


describe('Status', () => {
    
    render(<MemoryRouter><LoanStatus /></MemoryRouter>)

    test('fe_react_customerLoanStatus', () => {
       const  loanStatus = screen.queryByTestId('loanStatus');
	   
	   expect(loanStatus).toBeTruthy();
    })

})