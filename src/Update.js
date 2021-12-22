import React from 'react';

class Update extends React.Component {
    render() { 
        const { book, onUpdate } = this.props
        return (
            <div>
                <div className="book-shelf-changer">
                    <select
                        onChange={(event) => onUpdate(book, event.target.value)}
                        value={book.shelf || "none"}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
            </div>
        )
    }
}
 
export default Update;