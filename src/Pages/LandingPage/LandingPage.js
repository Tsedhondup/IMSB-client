import BookLists from "../../Components/BookLists/BookLists";
import SearchForm from "../../Components/SearchForm/SearchForm";
const LandingPage = () => {
  return (
    <div>
      <SearchForm />
      <BookLists />
    </div>
  );
};
export default LandingPage;
