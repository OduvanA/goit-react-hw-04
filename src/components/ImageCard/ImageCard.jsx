import css from './ImageCard.module.css';

export default function ImageCard({ item, openModal }) {
  const handleClick = () => {
    openModal(item);
  };

  return (
    <div className={css.container} onClick={handleClick}>
      <img className={css.image} src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}
