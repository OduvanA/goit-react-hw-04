import css from './LoadMoreBtn.module.css';



export default function LoadMoreBtn({handleLoadMore}) {

  return (
    <div className={css.container}>
      <button onClick={handleLoadMore}>Load more...</button >
    </div>
  );
}
