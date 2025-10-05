import React from 'react';
import Book from './Book';

const Books = ({ booksdata }) => {

    return (
        <div>
            <h2 className='text-5xl font-bold text-center mt-24 mb-9'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  '>
                {booksdata.map(book => <Book key={book.bookId} book={book} />)}
            </div>
        </div>
    );
};

export default Books;