import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import "react-datepicker/dist/react-datepicker.css";
import { filterGenre } from "../../utilities/filterGenre";
import "./BookListsSelectOptions.scss";

import "./BookListsSelectOptions.scss";
const BookListsSelectOptions = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [isbn, setIsbn] = useState("");
  const [titleLists, setTitleLists] = useState([]);
  const [authorLists, setAuthorLists] = useState([]);
  const [genreLists, setGenreLists] = useState([]);
  const [isbnLists, setIsbnLists] = useState([]);

  // DATA INITIALIZATIONS
  useEffect(() => {
    const titles = props.bookLists.map((element) => {
      return element.title;
    });
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
    setTitleLists(titles);
    setAuthorLists(authors);
    setGenreLists(filterGenre(genres));
    setIsbnLists(isbnsSorted);
  }, []);

  // FILTER BOOKS
  const handleSearch = (keyName, keyValue) => {
    axios
      .get(" http://localhost:8080/filterInventories", {
        params: {
          [keyName]: keyValue,
        },
      })
      .then((respond) => {
        props.setBookLists(respond.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // HANDLE INPUTS VALUES AND INVOKE SEARCH HANDLER
  const handleOptionChange = (event) => {
    if (event.target.id === "title") {
      setTitle(event.target.value);
      handleSearch(event.target.id, event.target.value);
    }
    if (event.target.id === "author") {
      setAuthor(event.target.value);
      handleSearch(event.target.id, event.target.value);
    }
    if (event.target.id === "genre") {
      setGenre(event.target.value);
      handleSearch(event.target.id, event.target.value);
    }
    if (event.target.id === "isbn") {
      setIsbn(event.target.value);
      handleSearch(event.target.id, event.target.value);
    }
  };

  const handleDateChange = () => {
    if (startDate) {
      // GET NEW DATE
      const newDate = moment(startDate).format("L");
      handleSearch("publication_date", newDate);
    }
  };
  return (
    <div className="option-container">
      {/* TITLE HEADERS */}
      <select
        id="title"
        className="option-container__options"
        value={title}
        onChange={(event) => {
          handleOptionChange(event);
        }}
      >
        <option className="search-filter__options--item" value="" disabled>
          title
        </option>
        {titleLists.map((element, index) => (
          <option
            className="option-container__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select>
      {/* AUTHOR HEADER */}
      <select
        id="author"
        className="option-container__options"
        value={author}
        onChange={(event) => {
          handleOptionChange(event);
        }}
      >
        <option className="option-container__options--item" value="" disabled>
          author
        </option>
        {authorLists.map((element, index) => (
          <option
            className="option-container__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select>
      {/* GENRE HEADER */}
      <select
        id="genre"
        className="option-container__options"
        value={genre}
        onChange={(event) => {
          handleOptionChange(event);
        }}
      >
        <option className="option-container__options--item" value="" disabled>
          genre
        </option>
        {genreLists.map((element, index) => (
          <option
            className="option-container__options--item"
            key={index}
            value={element}
          >
            {element}
          </option>
        ))}
      </select>
      {/* DATE HEADER */}
      <div className="option-container__options">
        <DatePicker
          className="option-container__options--item"
          placeholderText="month/day/year"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            handleDateChange();
          }}
          onSelect={(date) => {
            setStartDate(date);
            handleDateChange();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleDateChange();
            }
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleDateChange();
            }
          }}
        />
      </div>
      {/* ISBN HEADER */}
      <select
        id="isbn"
        className="option-container__options"
        value={isbn}
        onChange={(event) => {
          handleOptionChange(event);
        }}
      >
        <option className="option-container__options--item" value="" disabled>
          isbn
        </option>
        {isbnLists.map((element, index) => (
          <option
            className="option-container__options--item"
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
