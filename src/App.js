import React from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    results: []
  }
  
  updateBooks = (books) => {
    this.setState({ books });
  }

  updateResults = (results) => {
    this.setState({ results });
  }

  updateBooksShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        const { books } = this.state;
        const updated = books.find(object => 
            object.id === book.id
        )
        if (updated) {
          updated.shelf = shelf
          this.setState({
            books
          })
        }
      })
  }

  updateResultsShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        const { results } = this.state;
        const updated = results.find(object => 
            object.id === book.id
        )
        if (updated) {
          updated.shelf = shelf
          this.setState({
            results
          })
        }
      })
  }

  searchBooks = (searchTerm) => {
    if (searchTerm === "") { 
      return this.setState({results: []}); 
    }

    BooksAPI.search(searchTerm).then((res) => {
      if (res.error) { 
        return this.setState({results: []}); 
      }
      else {
        BooksAPI.getAll().then((books) => this.updateBooks(books));
        this.state.books.forEach((book) => {
          // add shelf property to result books
          const searched = res.find(object => 
          object.id === book.id
          )
          if (searched) {
            searched.shelf = book.shelf;
          }
        });
        this.setState({results: res});
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path='/'>
            <Home 
              books={this.state.books}
              onUpdate={this.updateBooksShelf}
              home={this.updateBooks}
            />
          </Route>

          <Route path='/search'>
            <Search 
              books={this.state.results}
              onUpdate={this.updateResultsShelf}
              onSearch={this.searchBooks}
              search={this.updateResults}
            />
          </Route>
        </Router>
      </div>
    )
  }
}

export default BooksApp
