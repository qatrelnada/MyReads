import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Bar extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    }
    render() { 
        const { onSearch } = this.props
        return ( 
            <div className="search-books-bar">
                <Link
                className="close-search"
                to='/'
                >Close</Link>

                <div className="search-books-input-wrapper">
                    <input
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={(event) => onSearch(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}
 
export default Bar;