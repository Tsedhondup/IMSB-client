import "./BookLists.scss";
const BookLists = (props) => {
  if (props.hasLoaded && props.bookLists.length > 0) {
    return (
      <div className="book-lists">
        <div className="tablet-book-lists">
          <div className="book-lists__body">
            {props.bookLists.map((element) => {
              return (
                <p key={element.entry_id} className="tablet-book-lists__child">
                  {element.title}
                </p>
              );
            })}
          </div>
          <div className="book-lists__body">
            {props.bookLists.map((element) => {
              return (
                <p key={element.entry_id} className="tablet-book-lists__child">
                  {element.author}
                </p>
              );
            })}
          </div>
          <div className="book-lists__body">
            {props.bookLists.map((element) => {
              return (
                <p key={element.entry_id} className="tablet-book-lists__child">
                  {element.genre}
                </p>
              );
            })}
          </div>
          <div className="book-lists__body">
            {props.bookLists.map((element) => {
              return (
                <p key={element.entry_id} className="tablet-book-lists__child">
                  {element.publication_date}
                </p>
              );
            })}
          </div>
          <div className="book-lists__body">
            {props.bookLists.map((element) => {
              return (
                <p key={element.entry_id} className="tablet-book-lists__child">
                  {element.isbn}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mobile-book-lists">
          {props.bookLists.map((element) => {
            return (
              <div className="mobile-book-lists__body" key={element.entry_id}>
                <h3 className="mobile-book-lists__mobile-header">title</h3>
                <h3 className="mobile-book-lists__child">{element.title}</h3>
                <h3 className="mobile-book-lists__mobile-header">author</h3>
                <h3 className="mobile-book-lists__child">{element.author}</h3>
                <h3 className="mobile-book-lists__mobile-header">genre</h3>
                <h3 className="mobile-book-lists__child">{element.genre}</h3>
                <h3 className="mobile-book-lists__mobile-header">
                  publication data
                </h3>
                <h3 className="mobile-book-lists__child">
                  {element.publication_date}
                </h3>
                <h3 className="mobile-book-lists__mobile-header">isbn</h3>
                <h3 className="mobile-book-lists__child">{element.isbn}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default BookLists;
