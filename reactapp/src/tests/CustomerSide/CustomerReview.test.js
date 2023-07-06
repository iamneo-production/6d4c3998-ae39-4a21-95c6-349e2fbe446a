import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
<<<<<<< HEAD
import Review from '../../components/Customer/Review/Review';
=======
import Review from '../../components/ustomer/review/review';
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09

describe ('User Review' ,() => {
	const {  container } = render(<MemoryRouter><Review /></MemoryRouter>) ;
        
    test('fe_react_customerReview', () => {
       const  comments = screen.queryByTestId('comments');
       const  submitReview = screen.queryByTestId('submitReview');
	   
	   expect(comments).toBeTruthy();
	   expect(submitReview).toBeTruthy();
    })
})