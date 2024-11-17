import { useState } from "react";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [isbn, setIsbn] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="title">title</label>
        <input id="title" type="text" value={title}></input>
        <label htmlFor="author">Author name</label>
        <input id="author" type="text" value={author}></input>
        <label htmlFor="genre">genre</label>
        <input id="genre" type="text" value={genre}></input>
        <label htmlFor="publication-date">Date of publication</label>
        <input id="publication-date" type="text" value={pubDate}></input>
        <label htmlFor="isbn">ISBN</label>
        <input id="isbn" type="text" value={isbn}></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};
export default AddBookForm;
