import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredData, addToStoredWishList } from '../../Utility/LocalStorage';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const books = useLoaderData();
    const book = books.find(book => book.bookId === bookId);
    const { image, bookName, author, category, review, rating, tags, totalPages, publisher, yearOfPublishing } = book;
    const handelRead = (id) => {
        addToStoredData(id);
    }
    const handelWishList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div className='mt-14 grid grid-cols-1 md:grid-cols-2 gap-7'>
            <div className='bg-base-200 rounded-2xl grid place-items-center'>
                <img src={image} className='max-h-[600px] p-16' />
            </div>

            <div>
                <h2 className='text-4xl font-bold mb-4'>{bookName}</h2>
                <h5 className='mb-4'>By: {author}</h5>
                <hr className='text-gray-300' />
                <h5 className='py-4 font-medium'>{category}</h5>
                <hr className='text-gray-300 mb-8' />
                <p className='text-gray-600 mb-4'><span className='font-bold text-black'>Review: </span> {review}</p>
                <div className='mb-4 space-x-4'> <span className='font-bold'>Tag</span>
                    {tags.map(tag => <button key={tag} className='text-[#23BE0A] max-md:text-sm font-medium bg-[#23be0a0d] py-1 px-4 rounded-full'> {tag}</button>)}
                </div>
                <hr className='text-gray-300 mb-8' />
                <div className='space-y-4'>
                    <table className='text-left '>
                        <tr className=''>
                            <td >Number of Pages:</td>
                            <td className='pl-8 pb-4'>{totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher:</td>
                            <td className='pl-8 pb-4'>{publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing:</td>
                            <td className='pl-8 pb-4'>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td className='pl-8'>{rating}</td>
                        </tr>
                    </table>
                </div>
                <div className='space-x-4 mt-6'>
                    <a className='btn text-black px-6 mr-5' onClick={() => handelRead(id)}> Read</a>
                    <a className="btn bg-[#59C6D2] text-white text-xs px-4 py-0.5 lg:px-7 lg:py-4 rounded-lg" onClick={() => handelWishList(id)}>Wishlist</a>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;