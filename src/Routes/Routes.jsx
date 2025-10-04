import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../Pages/Root/Root';
import Error_Page from '../Pages/Error Page/Error_Page';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error_Page />,
        children: [
            { index: true, Component: Home }
        ]

    },

])