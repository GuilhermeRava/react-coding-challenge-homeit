import React, { useState, useEffect } from 'react'

import './BookDetail.scss';
import api from '../../api/axios';
import Loader from '../Loader/Loader';

const Book = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [book, setBook] = useState(null);

    const book_id = parseInt(props.match.params.bookId);

    useEffect(() => {
        const asyncWrapper = async () => {
            const res = await api.get('/books');
            const data = res.data.filter( book => book.book_id === book_id)[0];
            setBook(data);
        }
        asyncWrapper();
    }, [book_id]);

    useEffect(() => {
        if(book != null) {
            setLoading(false)
        }
    }, [book]);

    return (
        <React.Fragment>
        {isLoading 
            ? <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Loader />
            </div>
            : <div className="col-12">
                <div className="book-detail">
                    <img className="col-md-6 col-lg-6" src={book.cover} alt="book cover"/>
                    <div className="book-detail__details col-md-6 col-lg-6">
                        <p>Book Name: <strong>{book.name}</strong></p>
                        <p>Author: <strong>{book.author}</strong></p>
                        <p>isbn: <strong>{book.isbn}</strong></p>
                        <p>published at: <strong>{book.published_at}</strong></p>
                    </div>
                </div>
            </div>
        }
        </React.Fragment>
    )
}

export default Book;