import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import LandingPage from '../pages/LandingPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			// {
			// 	path: "memberSignUp",
			// 	element: <MemberSignUp />,
			// },
        ]
    }
]);

export default router;