import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddBookForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [isbn, setIsbn] = useState("");

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
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="title">title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
          }}
        ></input>
        <label htmlFor="author">Author name</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
          }}
        ></input>
        <label htmlFor="genre">genre</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
          }}
        ></input>
        <label htmlFor="publication-date">Date of publication</label>
        <input
          id="publication-date"
          type="text"
          value={pubDate}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
          }}
        ></input>
        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          type="text"
          value={isbn}
          onChange={(event) => {
            event.stopPropagation();
            handleFormInputs(event);
          }}
        ></input>
        <button type="button" onClick={handleBookPost}>
          addBook
        </button>
      </form>
    </div>
  );
};
export default AddBookForm;
