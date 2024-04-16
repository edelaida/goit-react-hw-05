import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast("Please enter search term!");

const SearchBar = ({ onSearchBar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const film = form.elements.film.value;
    if (film.length === 0) {
      notify();
    } else {
      onSearchBar(film);
      form.reset();
    }
  };

  return (
    <form className={css.infoform} onSubmit={handleSubmit}>
      <input type="text" name="film" placeholder="Search films..." />
      <button type="submit">▶ Serch films</button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
