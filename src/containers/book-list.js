import React,  { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whateve is returned will show
  // inside of BookList
  return {
    books: state.books
  };
}

export default connect (mapStateToProps)(BookList);
//mapStateToProps is the function and the BookList is the Component
//connect from react-redux makes both arguments a container
