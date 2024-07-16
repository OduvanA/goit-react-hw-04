import toast, { Toaster } from 'react-hot-toast';
import { FcSearch } from "react-icons/fc";
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.searchBar.value.trim();
    if (!value) {
      toast('!!!   Please enter your query', {
        duration: 2000,
        position: 'top-right',
      });
    }
    onSubmit(value);
    return;
  };

  return (
    <header className={css.header}> 
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="searchBar"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit" ><FcSearch className={css.icon} /></button>
      </form>
      <Toaster />
    </header>
  );
}
