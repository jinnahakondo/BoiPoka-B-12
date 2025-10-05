import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const Book = ({ book }) => {
    const { image, bookName, author, category, rating, tags } = book;
    return (
        <div className="card bg-base-100 w-full shadow-md p-6 border border-gray-300 rounded-2xl ">
            <figure className=" bg-base-200 rounded-2xl flex items-center justify-center mb-6">
                <img
                    src={image} className="rounded-xl h-[166px] py-8" />
            </figure>
            <div className="">
                <div className='mb-4'>
                    {tags.map(tag => <button key={tag} className='text-[#23BE0A] max-md:text-sm font-medium bg-[#23be0a0d] py-1 px-4 rounded-full mr-4'> {tag}</button>)}
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">{bookName}</h2>
                <p className='font-medium mb-4'>By: {author}</p>
                <div className='border border-dashed border-gray-300 mb-4'></div>
                <div className="flex justify-between font-medium items-center">
                    <h3>{category}</h3>
                    <h3 className='flex gap-3 items-center'>{rating} <FaRegStar /></h3>
                </div>
            </div>
        </div>
    );
};

export default Book;