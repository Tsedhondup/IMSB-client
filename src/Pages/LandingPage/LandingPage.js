import axios from "axios";
import { useEffect, useState } from "react";
import BookLists from "../../Components/BookLists/BookLists";
import SearchForm from "../../Components/SearchForm/SearchForm";
import BookListsSelectOptions from "../../Components/BookListsHeaderButtons/BookListsSelectOptions";
import ExportButtons from "../../Components/ExportButtons/ExportButtons";
import "./LandingPage.scss";
const LandingPage = () => {
  const [bookLists, setBookLists] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(" http://localhost:8080/inventories")
      .then((respond) => {
        setBookLists(respond.data);
      })
      .then(() => {
        setHasLoaded(true);
      })
      .catch((err) => {
        setBookLists([]);
      });
  }, []);

  if (hasLoaded) {
    return (
      <div className="landing-page">
        <ExportButtons bookLists={bookLists} />
        <SearchForm setBookLists={setBookLists} />
        <BookListsSelectOptions
          bookLists={bookLists}
          setBookLists={setBookLists}
        />
        <BookLists bookLists={bookLists} hasLoaded={hasLoaded} />
      </div>
    );
  }
};
export default LandingPage;
