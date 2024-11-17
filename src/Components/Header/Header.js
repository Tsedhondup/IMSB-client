import { useNavigate } from "react-router-dom";
const Headers = () => {
  const navigate = useNavigate();
  const handleAddNew = () => {
    navigate("/addBook");
  };
  return (
    <div>
      <h1>Book Inventory</h1>
      <button onClick={handleAddNew}>add</button>
    </div>
  );
};
