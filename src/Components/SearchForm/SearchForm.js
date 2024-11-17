import { useState } from "react";
import axios from "axios";
import "./SearchForm.scss";
const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("search by");
  const [searchByButtonClass, setSearchByButtonClass] = useState("");
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
  const handleSearch = async () => {
    if (selectedCondition === "search by") {
      setSearchByButtonClass("js-border-red");
      return;
    } else {
      axios
        .get(" http://localhost:8080/filterInventories", {
          params: {
            [selectedCondition.toLocaleLowerCase()]: searchValue,
          },
        })
        .then((respond) => {
          props.setBookLists(respond.data);
        })
        .then(() => {
          props.setHasLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <input
        className="search-form__input"
        type="text"
        value={searchValue}
        placeholder="search"
        onChange={(event) => {
          handleSearchValue(event);
        }}
      ></input>
      <h2>Seacrh by</h2>
      <div className="search-filter">
        <select
          className="search-filter__options"
          value={selectedCondition}
          onChange={handleOptionChange}
        >
          <option
            className={`search-filter__options--item ${searchByButtonClass}`}
            value=""
            disabled
          >
            search by
          </option>
          {fitlerConditons.map((element, index) => (
            <option
              className="search-filter__options--item"
              key={index}
              value={element.toLowerCase()}
            >
              {element}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
export default SearchForm;
