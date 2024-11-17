import { useState } from "react";

const AddBookForm = () => {
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
    if (event.target.id === "pubDate") {
      setPubDate(event.target.value);
    }
    if (event.target.id === "isbn") {
      setIsbn(event.target.value);
    }
  };
  return (
    <div>
      <form>
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
        <button type="submit"></button>
      </form>
    </div>
  );
};
export default AddBookForm;
