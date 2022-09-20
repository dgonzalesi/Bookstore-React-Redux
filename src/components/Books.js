import React from 'react';
import { createStore } from 'redux';
import BookForm from './BooksForm';

const bookCounter = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      console.log(state);
      return state - 1;
    default:
      return state;
  }
};

const appStore = createStore(bookCounter);

console.log(appStore.getState());
console.log(appStore.dispatch({ type: 'INCREMENT' }));
console.log(appStore.dispatch({ type: 'INCREMENT' }));
console.log(appStore.getState());
console.log(appStore.subscribe(() => {
  console.log(appStore.getState());
  console.log('State changed');
}));

const increase = () => appStore.dispatch({ type: 'INCREMENT' });

export default function BooksList() {
  return (
    <div>
      <h3 className="book-category">Book Category</h3>
      <h2 className="book-title">Book Title</h2>
      <h3 className="book-author">Book Author</h3>
      <div className="book-buttons">
        <button type="button" onClick={increase} className="book-button">Comments</button>
        <button type="button" className="book-button">Remove</button>
        <button type="button" className="book-button">Edit</button>
      </div>
      <div className="book-progress">
        <div className="book-progress-bar">
          <div className="book-progress-bar-fill" />
        </div>
        <div className="book-progress-percentage"> 0%</div>
      </div>
      <div className="book-chapter">
        <h3 className="book-chapter-title">Current Chapter</h3>
        <h3 className="book-chapter-number">Chapter 1</h3>
        <button type="button" className="book-button">UPDATE PROGRESS</button>
      </div>
      <BookForm />
    </div>
  );
}