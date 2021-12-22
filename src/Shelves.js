import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item';

export default class Shelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdate: PropTypes.func.isRequired
    }
    render() {
        const { books, onUpdate } = this.props;
        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");

        const shelves = [
            {id: 1, title: "Currently Reading", books: currentlyReading},
            {id: 2, title: "Want to read", books: wantToRead},
            {id: 3, title: "Read", books: read}
        ];

        return (
            <div className="list-books-content">
                <div>

                    {shelves.map((shelf) => (
                        <div key={shelf.id} className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {shelf.books.map((book) => (
                                        <li key={book.id}>
                                            <Item 
                                                book={book}
                                                onUpdate={onUpdate}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        )
    }
}