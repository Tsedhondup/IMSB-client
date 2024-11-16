import axios from "axios";
import { useEffect, useState } from "react";

const BookLists = () => {
  const [bookLists, setBookLists] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(" http://localhost:8080/inventories")
      .then((respond) => {
        setBookLists(respond.data);
      })
      .then(() => {
        setHasLoaded(true);
      })
      .catch((err) => {
        setBookLists([]);
      });
  }, []);

  if (hasLoaded) {
    return (
      <div className="book-lists">
        <ul className="book-lists__headers">
          <li className="book-lists__headers--item">Title</li>
          <li className="book-lists__headers--item">Author</li>
          <li className="book-lists__headers--item">Genre</li>
          <li className="book-lists__headers--item">publication Date</li>
          <li className="book-lists__headers--item">ISBN</li>
        </ul>
        {bookLists.map((element) => {
          return (
            <div className="book-lists__body">
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
