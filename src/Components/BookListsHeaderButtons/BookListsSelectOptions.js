import "./BookListsSelectOptions.scss";
const BookListsSelectOptions = () => {
  const fitlerConditons = [
    "title",
    "author",
    "genre",
    "publication date",
    "ISBN",
  ];

  return (
    <div className="option-container">
      <select className="search-filter__options">
        <option className="search-filter__options--item" value="" disabled>
          search by
        </option>
        {fitlerConditons.map((option, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={option.toLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>
      <select className="search-filter__options">
        <option className="search-filter__options--item" value="" disabled>
          search by
        </option>
        {fitlerConditons.map((option, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={option.toLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>{" "}
      <select className="search-filter__options">
        <option className="search-filter__options--item" value="" disabled>
          search by
        </option>
        {fitlerConditons.map((option, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={option.toLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>{" "}
      <select className="search-filter__options">
        <option className="search-filter__options--item" value="" disabled>
          search by
        </option>
        {fitlerConditons.map((option, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={option.toLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>{" "}
      <select className="search-filter__options">
        <option className="search-filter__options--item" value="" disabled>
          search by
        </option>
        {fitlerConditons.map((option, index) => (
          <option
            className="search-filter__options--item"
            key={index}
            value={option.toLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BookListsSelectOptions;
