import React, { Component } from 'react'
import Bar from './Bar';
import PropTypes from 'prop-types'
import Item from './Item';

export default class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  async componentDidMount() {
    const { search } = this.props;
    search([]);
  }
  
  render() {
    const { books, onUpdate, onSearch } = this.props;
    return (
      <div className="search-books">

        <Bar 
          onSearch={onSearch}
        />

        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
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

    )
  }
}
