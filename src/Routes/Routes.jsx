import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../Pages/Root/Root';
import Error_Page from '../Pages/Error Page/Error_Page';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/Books/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error_Page />,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: 'listed-books',
                loader: () => fetch('booksData.json'),
                Component: ReadList
            },
            {
                path: 'book-details/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails
            }
        ]

    },

])