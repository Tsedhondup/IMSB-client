import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddBookForm.scss";
const AddBookForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [isbn, setIsbn] = useState("");
  const [titleClass, setTitleClass] = useState("");
  const [authorClass, setAuthorClass] = useState("");
  const [genreClass, setGenreClass] = useState("");
  const [dateClass, setDateClass] = useState("");
  const [isbnClass, setIsbnClass] = useState("");

  // HANDLE FORM INPUT VALUES
  const handleFormInputs = (event) => {
    if (event.target.id === "title") {
      setTitle(event.target.value);
    }
    if (event.target.id === "author") {
      setAuthor(event.target.value);
    }
    if (event.target.id === "genre") {
      setGenre(event.target.value);
    }
    if (event.target.id === "publication-date") {
      setPubDate(event.target.value);
    }
    if (event.target.id === "isbn") {
      setIsbn(event.target.value);
    }
  };

  // HANDLE POST
  const handleBookPost = () => {
    if (!title) {
      setTitleClass("js-border-red");
    }
    if (!author) {
      setAuthorClass("js-border-red");
    }
    if (!genre) {
      setGenreClass("js-border-red");
    }
    if (!pubDate) {
      setDateClass("js-border-red");
    }
    if (!isbn) {
      setIsbnClass("js-border-red");
    }
    if (title && author && genre && pubDate && isbn) {
      axios
        .post(" http://localhost:8080/inventories", {
          title,
          author,
          genre,
          publication_date: pubDate,
          isbn,
        })
        .then((respond) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // FORM VALIDATION
  const validateForm = (event) => {
    if (event.target.id === "title") {
      event.target.value
        ? setTitleClass("js-border-green")
        : setTitleClass("js-border-red");
    }
    if (event.target.id === "author") {
      event.target.value
        ? setAuthorClass("js-border-green")
        : setAuthorClass("js-border-red");
    }
    if (event.target.id === "genre") {
      event.target.value
        ? setGenreClass("js-border-green")
        : setGenreClass("js-border-red");
    }
    if (event.target.id === "publication-date") {
      event.target.value
        ? setDateClass("js-border-green")
        : setDateClass("js-border-red");
    }
    if (event.target.id === "isbn") {
      event.target.value
        ? setIsbnClass("js-border-green")
        : setIsbnClass("js-border-red");
    }
  };
  return (
    <div className="add-books">
      <form
        className="add-books__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* TITLE */}
        <label htmlFor="title" className="add-books__form-label">
          title
        </label>
        <input
          id="title"
          className={`add-books__form--input-field ${titleClass}`}
          type="text"
          value={title}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
            validateForm(event);
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3
          className={`add-books__form--warning-msg ${
            titleClass === "js-border-red" ? "js-warning-msg" : ""
          }`}
        >
          Please enter book title
        </h3>

        {/* AUTHOR */}
        <label htmlFor="author" className="add-books__form-label">
          Author name
        </label>
        <input
          id="author"
          className={`add-books__form--input-field ${authorClass}`}
          type="text"
          value={author}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
            validateForm(event);
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3
          className={`add-books__form--warning-msg ${
            authorClass === "js-border-red" ? "js-warning-msg" : ""
          }`}
        >
          Please enter author name
        </h3>

        {/* GENRE */}
        <label htmlFor="genre" className="add-books__form-label">
          genre
        </label>
        <input
          id="genre"
          className={`add-books__form--input-field ${genreClass}`}
          type="text"
          value={genre}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
            validateForm(event);
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3
          className={`add-books__form--warning-msg ${
            genreClass === "js-border-red" ? "js-warning-msg" : ""
          }`}
        >
          Enter genre
        </h3>

        {/* DATE OF PUBLICATION */}
        <label htmlFor="publication-date" className="add-books__form-label">
          Date of publication
        </label>
        <input
          id="publication-date"
          className={`add-books__form--input-field ${dateClass}`}
          type="text"
          value={pubDate}
          placeholder="Month/Day/Year"
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
            validateForm(event);
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3
          className={`add-books__form--warning-msg ${
            dateClass === "js-border-red" ? "js-warning-msg" : ""
          }`}
        >
          enter date of publication
        </h3>

        {/* ISBN */}
        <label htmlFor="isbn" className="add-books__form-label">
          ISBN
        </label>
        <input
          id="isbn"
          className={`add-books__form--input-field ${isbnClass}`}
          type="text"
          value={isbn}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
            validateForm(event);
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3
          className={`add-books__form--warning-msg ${
            isbnClass === "js-border-red" ? "js-warning-msg" : ""
          }`}
        >
          Please enter valid ISBN
        </h3>

        <button
          className="add-books__form--add-button"
          type="button"
          onClick={handleBookPost}
        >
          add Book
        </button>
      </form>
    </div>
  );
};
export default AddBookForm;
