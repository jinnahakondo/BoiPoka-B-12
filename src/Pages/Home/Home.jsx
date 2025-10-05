import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksdata = useLoaderData()
    return (
        <div>
            <Banner />
            <Books booksdata={booksdata}/>
        </div>
    );
};

export default Home;