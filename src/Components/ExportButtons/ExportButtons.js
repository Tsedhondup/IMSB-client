import { exportToJSON } from "../../utilities/exportInJSON";
import { exportToCSV } from "../../utilities/exportInCSV";
import "./ExportButtons.scss";
const ExportButtons = (props) => {
  return (
    <div className="export-booklists">
      <h2 className="exports-booklists__header">Export/Dowload Book lists</h2>
      <div className="export-booklist__button-container">
        <button
          className="export-booklist__button-container--button"
          onClick={() => {
            exportToJSON(props.bookLists);
          }}
        >
          JSON format
        </button>
        <button
          className="export-booklist__button-container--button"
          onClick={() => {
            exportToCSV(props.bookLists);
          }}
        >
          CSV format
        </button>
      </div>
    </div>
  );
};
export default ExportButtons;
