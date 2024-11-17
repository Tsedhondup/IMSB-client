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
    if (!title || !author || !genre || !pubDate || !isbn) {
      return;
    } else {
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
      event.target.value ? setTitleClass("") : setTitleClass("js-border-red");
    }
    if (event.target.id === "author") {
      event.target.value ? setAuthorClass("") : setAuthorClass("js-border-red");
    }
    if (event.target.id === "genre") {
      event.target.value ? setGenreClass("") : setGenreClass("js-border-red");
    }
    if (event.target.id === "publication-date") {
      event.target.value ? setDateClass("") : setDateClass("js-border-red");
    }
    if (event.target.id === "isbn") {
      event.target.value ? setIsbnClass("") : setIsbnClass("js-border-red");
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
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3 className="add-books__form--warning-msg">
          Please enter book title
        </h3>
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
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3 className="add-books__form--warning-msg">
          Please enter author name
        </h3>
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
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3 className="add-books__form--warning-msg">Enter genre</h3>

        <label htmlFor="publication-date" className="add-books__form-label">
          Date of publication
        </label>
        <input
          id="publication-date"
          className={`add-books__form--input-field ${dateClass}`}
          type="text"
          value={pubDate}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3 className="add-books__form--warning-msg">
          enter date of publication
        </h3>

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
          }}
          onBlur={(event) => {
            validateForm(event);
          }}
        ></input>
        <h3 className="add-books__form--warning-msg">
          Please enter valid ISBN
        </h3>

        <button
          className="add-books__form--add-button"
          type="button"
          onClick={handleBookPost}
        >
          addBook
        </button>
      </form>
    </div>
  );
};
export default AddBookForm;
