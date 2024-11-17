import "./BookLists.scss";
const BookLists = (props) => {
  if (props.hasLoaded && props.bookLists.length > 0) {
    return (
      <div className="book-lists">
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
  if (props.hasLoaded && props.bookLists.length < 0) {
    return (
      <div>
        <h2>Inventory has no book!</h2>
        <button>add new book</button>
      </div>
    );
  }
};
export default BookLists;
