import React from 'react';
import Book from './Book';

class Item extends React.Component {
    render() { 
        const { book, onUpdate } = this.props;
        return <div>
            <Book 
                book={book}
                onUpdate={onUpdate}
            />
        </div>;
    }
}
 
export default Item;