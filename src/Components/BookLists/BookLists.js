import axios from "axios";
import { useEffect, useState } from "react";
import "./BookLists.scss";
const BookLists = (props) => {
  if (props.hasLoaded) {
    return (
      <div className="book-lists">
        <ul className="book-lists__headers">
          <li className="book-lists__headers--item">Title</li>
          <li className="book-lists__headers--item">Author</li>
          <li className="book-lists__headers--item">Genre</li>
          <li className="book-lists__headers--item">publication Date</li>
          <li className="book-lists__headers--item">ISBN</li>
        </ul>
        {props.bookLists.map((element) => {
          return (
            <div className="book-lists__body" key={element.entry_id}>
              <h3 className="book-lists__body--child">{element.title}</h3>
              <h3 className="book-lists__body--child">{element.author}</h3>
              <h3 className="book-lists__body--child">{element.genre}</h3>
              <h3 className="book-lists__body--child">
                {element.publication_date}
              </h3>
              <h3 className="book-lists__body--child">{element.isbn}</h3>
            </div>
          );
        })}
      </div>
    );
  }
};
export default BookLists;
