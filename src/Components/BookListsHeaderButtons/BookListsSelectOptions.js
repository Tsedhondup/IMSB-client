import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./BookListsSelectOptions.scss";
const BookListsSelectOptions = (props) => {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [isbn, setIsbn] = useState("");
  const [authorLists, setAuthorLists] = useState([]);
  const [genreLists, setGenreLists] = useState([]);
  const [isbnLists, setIsbnLists] = useState([]);
  useEffect(() => {
    const authors = props.bookLists.map((element) => {
      return element.author;
    });
    const genres = props.bookLists.map((element) => {
      return element.genre;
    });

    const isbns = props.bookLists.map((element) => element.isbn);
    // SORTING ISBN IN ASCENDING ORDER
    const isbnsSorted = isbns.sort((element1, element2) => {
      return Number(element1) - Number(element2);
    });

    setAuthorLists(authors);
    setGenreLists(genres);
    setIsbnLists(isbnsSorted);
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
      </select>
      {/* DATE HEADER */}
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
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
