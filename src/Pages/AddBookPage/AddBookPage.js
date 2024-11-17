import AddBookForm from "../../Components/AddBookForm/AddBookForm";
import "./AddBookPage.scss";
const AddBookPage = () => {
  return (
    <div className="add-books-form">
      <h1 className="add-books-form__header">Add book</h1>
      <AddBookForm />
    </div>
  );
};
export default AddBookPage;
