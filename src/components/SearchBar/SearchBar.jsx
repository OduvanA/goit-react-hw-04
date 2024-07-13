import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.searchBar.value.trim());
    return;
  };

  return (
    <header className={css.header}> 
      <form onSubmit={handleSubmit}>
        <input
          name="searchBar"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" >Search</button>
      </form>
    </header>
  );
}
