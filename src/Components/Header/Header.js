import { useNavigate } from "react-router-dom";
import "./Header.scss";
const Headers = () => {
  const navigate = useNavigate();
  const handleAddNew = () => {
    navigate("/addBook");
  };
  return (
    <div className="header">
      <h1 className="header__site-name">BookInventory</h1>
      <p onClick={handleAddNew} className="header__add-book-form-link">
        add book +
      </p>
    </div>
  );
};
export default Headers;
