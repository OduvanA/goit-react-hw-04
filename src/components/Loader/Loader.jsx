import css from './Loader.module.css';
import { Blocks } from 'react-loader-spinner'

export default function Loader({loader}) {
  return (
    <div className={css.container}>
        <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={loader}
        />
    </div>
  );
}
