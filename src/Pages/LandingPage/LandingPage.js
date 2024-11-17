import axios from "axios";
import { useEffect, useState } from "react";
import BookLists from "../../Components/BookLists/BookLists";
import SearchForm from "../../Components/SearchForm/SearchForm";
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
  return (
    <div>
      <SearchForm setBookLists={setBookLists} />
      <BookLists bookLists={bookLists} hasLoaded={hasLoaded} />
    </div>
  );
};
export default LandingPage;
