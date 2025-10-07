import React from 'react';
import { BsJournalBookmark } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi';

const ReadListBook = ({ book }) => {
    const { image, bookName, author, publisher, totalPages, category, rating, tags, yearOfPublishing } = book;

    return (
        <div className='flex gap-7 justify-start items-center border border-gray-300 rounded-2xl mt-12 p-4'>
            <div className='bg-base-200 rounded-2xl'>
                <img src={image} className='h-[170px] p-12' />
            </div>
            <div className='space-y-4'>
                <h2 className="text-xl md:text-2xl font-bold ">{bookName}</h2>
                <p className='font-medium'>By: {author}</p>
                <div className='flex items-center justify-center gap-4'>
                    <div >
                        <span className='font-bold mr-4'>Tag:</span>
                        {tags.map(tag => <button key={tag} className='text-[#23BE0A] max-md:text-sm font-medium bg-[#23be0a0d] py-1 px-4 rounded-full mr-4'> {tag}</button>)}
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <p>Year of Publishing:</p>
                        <p >{yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex items-center  gap-7'>
                    <div className='flex items-center  gap-2'>
                        <HiOutlineUsers />
                        <p>publisher: <span>{publisher}</span> </p>
                    </div>

                    <div className='flex items-center  gap-2'>
                        <BsJournalBookmark />
                        <p>Page: <span>{totalPages}</span></p>
                    </div>
                </div>
                <div>
                    <div className='space-x-4 mt-6'>
                        <a className='btn bg-blue-200 text-blue-700  px-6 mr-5 rounded-xl'> Category: <span className='ml-1'>{category}</span></a>
                        <a className='btn bg-red-100 text-red-400  px-6 mr-5 rounded-xl'> Rating: <span className='ml-1'>{rating}</span></a>
                        <a className="btn bg-green-500 text-white text-xs px-4 py-0.5 lg:px-7 lg:py-4 rounded-xl">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadListBook;