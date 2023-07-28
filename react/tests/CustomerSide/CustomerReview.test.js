import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/ustomer/review/review';

describe ('User Review' ,() => {
	const {  container } = render(<MemoryRouter><Review /></MemoryRouter>) ;
        
    test('fe_react_customerReview', () => {
       const  comments = screen.queryByTestId('comments');
       const  submitReview = screen.queryByTestId('submitReview');
	   
	   expect(comments).toBeTruthy();
	   expect(submitReview).toBeTruthy();
    })
})