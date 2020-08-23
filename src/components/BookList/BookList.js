import React, { useEffect, useState } from 'react'
import './BookList.scss';

import api from '../../api/axios';
import Book from '../Book/Book';
import Loader from '../Loader/Loader';

const BookList = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const asyncWrapper = async () => {
            const res = await api.get('/books');
            const data = res.data;
            setBooks(data);
        }
        asyncWrapper();
    }, []);

    useEffect(() => {
        if(books.length > 0) {
            setLoading(false)
        }
    }, [books]);

    return (
        <div className="container-fluid">
            <div className="book-list row">
                {isLoading 
                    ? <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <Loader />
                    </div>
                    : books.map( book => (
                        <Book key={book.book_id} {...book} />
                        ))
                    }
            </div>
        </div>
    )
}

export default BookList;