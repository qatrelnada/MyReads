import React, { Component } from 'react'
import Header from "./Header"
import Shelves from "./Shelves"
import Button from "./Button"
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

export default class Home extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  async componentDidMount() {
    const { home } = this.props
    const books = await BooksAPI.getAll();
    home(books)
  }

  render() {
    const { books, onUpdate } = this.props;

    return (
      <div className="list-books">

        <Header />
        <Shelves 
          books={books}
          onUpdate={onUpdate}
        />
        <Button />
      
      </div>
    )
  }
}
