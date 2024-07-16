import css from './ImageCard.module.css';

export default function ImageCard({ item: { urls, alt_description }, openModal }) {
  const handleClick = () => {
    openModal(urls.regular);
  };

  return (
    <div className={css.container} onClick={handleClick}>
      <img className={css.image} src={urls.small} alt={alt_description} />
    </div>
  );
}
