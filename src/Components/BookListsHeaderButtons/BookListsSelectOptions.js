import { useEffect, useState } from "react";
import "./BookListsSelectOptions.scss";
const BookListsSelectOptions = (props) => {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [isbn, setIsbn] = useState("");
  const [authorLists, setAuthorLists] = useState([]);
  const [genreLists, setGenreLists] = useState([]);
  const [pubDateLists, setPubDateLists] = useState([]);
  const [isbnLists, setIsbnLists] = useState([]);
  useEffect(() => {
    const authors = props.bookLists.map((element) => {
      return element.author;
    });
    const genres = props.bookLists.map((element) => {
      return element.genre;
    });
    const publicationDates = props.bookLists.map((element) => {
      return element.publication_date;
    });

    const isbns = props.bookLists.map((element) => element.isbn);
    // SORTING ISBN IN ASCENDING ORDER
    const isbnsSorted = isbns.sort((element1, element2) => {
      return Number(element1) - Number(element2);
    });

    setAuthorLists(authors);
    setGenreLists(genres);
    setPubDateLists(publicationDates);
    setIsbnLists(isbnsSorted);
    console.log(isbnsSorted);
  }, []);

  const handleOptionChange = (event) => {};
  return (
    <div className="option-container">
      <h2>title</h2>
      {/* AUTHOR HEADER */}
      <select
        className="search-filter__options"
        value={author}
        onChange={handleOptionChange}
      >
        <option className="search-filter__options--item" value="" disabled>
          author
        </option>
        {authorLists.map((element, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select>
      {/* GENRE HEADER */}
      <select
        className="search-filter__options"
        value={genre}
        onChange={handleOptionChange}
      >
        <option className="search-filter__options--item" value="" disabled>
          genre
        </option>
        {genreLists.map((element, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select>{" "}
      {/* DATE HEADER */}
      {/* <select
        className="search-filter__options"
        value={pubDate}
        onChange={handleOptionChange}
      >
        <option className="search-filter__options--item" value="" disabled>
          publication date
        </option>
        {pubDateLists.map((element, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select> */}
      {/* ISBN HEADER */}
      <select
        className="search-filter__options"
        value={isbn}
        onChange={handleOptionChange}
      >
        <option className="search-filter__options--item" value="" disabled>
          isbn
        </option>
        {isbnLists.map((element, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BookListsSelectOptions;
