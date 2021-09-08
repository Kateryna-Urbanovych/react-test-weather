import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const LoaderSpinner = () => {
    return (
        <Loader
            type="Bars"
            color="#3f51b5"
            height={100}
            width={100}
            className={s.loader}
        />
    );
};

export default LoaderSpinner;
