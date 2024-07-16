import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p>Bad request, please reload this page!</p>
    </div>
  );
}
