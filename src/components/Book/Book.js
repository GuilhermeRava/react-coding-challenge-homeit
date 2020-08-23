import React from 'react'
import './Book.scss';
import { Link } from 'react-router-dom';

const Book = (props) => {

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="book">
                <Link to={`books/${props.book_id}`}>
                    <img src={props.cover} alt="book cover"/>
                    <div className="book__details">
                        <p className="book__details-name">{props.name}</p>
                        <p className="book__details-author">{props.author}</p>
                        <p className="book__details-isbn">isbn: <strong>{props.isbn}</strong></p>
                        <p className="book__details-published-at">published at: <strong>{props.published_at}</strong></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Book;