import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getToStoredData, getToStoredWishList } from '../../Utility/LocalStorage';
import { useLoaderData } from 'react-router';
import ReadListBook from './ReadListBook';
import WishList from '../Books/WishList/WishList';


const ReadList = () => {
    // WishList data 
    const [wishList, setWishList] = useState([]);
    const [readList, setReadList] = useState([]);
    const books = useLoaderData()
    useEffect(() => {
        const getStoredData = getToStoredData();
        const storedId = getStoredData.map(id => parseInt(id))
        const storedData = books.filter(book => storedId.includes(book.bookId));
        setReadList(storedData);

        // add to wishList 
        const getStoredWishList = getToStoredWishList();
        const storedWishList = getStoredWishList.map(id => parseInt(id));
        const storedWishListData = books.filter(book => storedWishList.includes(book.bookId))
        setWishList(storedWishListData)
    }, [books])

    return (
        <div>
            <div className='bg-base-200 rounded-2xl h-[100px] grid place-items-center my-12'>
                <h2 className=' text-2xl lg:text-3xl font-bold'>Books</h2>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WhisList Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-10 '>
                        {readList.map(book => <ReadListBook key={book.bookId} book={book} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    {wishList.map(book => <WishList key={book.bookId} book={book} />)}
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ReadList;