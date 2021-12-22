import React from 'react';
import Update from './Update';

class Book extends React.Component {
    render() { 
        const { book, onUpdate } = this.props
        return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <Update 
                        book={book}
                        onUpdate={onUpdate}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors  && book.authors.join(', ')}</div>
            </div>
        </div>
        )
    }
}
 
export default Book;