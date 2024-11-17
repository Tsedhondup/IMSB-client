import { useState } from "react";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const fitlerConditons = [
    "title",
    "author",
    "genre",
    "publication date",
    "ISBN",
  ];
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        value={searchValue}
        placeholder="search"
        onChange={(event) => {
          handleSearchValue(event);
        }}
      ></input>
      <div className="search-filter">
        <select
          className="search-filter__options"
          value={selectedCondition}
          onChange={handleOptionChange}
        >
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
    </form>
  );
};
export default SearchForm;
