const getToStoredData = () => {
    const getDataAsSrt = localStorage.getItem('storedBooks');
    if (getDataAsSrt) {
        const storedDataAsObj = JSON.parse(getDataAsSrt);
        return storedDataAsObj
    }
    else {
        return [];
    }
}


// add to localStorage 
const addToStoredData = id => {
    const storedBooks = getToStoredData();
    if (storedBooks.includes(id) === false) {
        storedBooks.push(id);
        const data = JSON.stringify(storedBooks);
        localStorage.setItem('storedBooks', data)
    }
}




const getToStoredWishList = () => {
    const getDataAsSrt = localStorage.getItem('storedWishListBooks');
    if (getDataAsSrt) {
        const storedDataAsObj = JSON.parse(getDataAsSrt);
        return storedDataAsObj
    }
    else {
        return [];
    }
}


// add to localStorage 
const addToStoredWishList = id => {
    const storedBooks = getToStoredWishList();
    if (storedBooks.includes(id) === false) {
        storedBooks.push(id);
        const data = JSON.stringify(storedBooks);
        localStorage.setItem('storedWishListBooks', data)
    }
}
export { addToStoredData, getToStoredData, getToStoredWishList, addToStoredWishList }