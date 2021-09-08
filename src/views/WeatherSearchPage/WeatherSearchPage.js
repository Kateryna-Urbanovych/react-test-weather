import SearchForm from 'components/SearchForm';
import ButtonGetLocation from 'components/ButtonGetLocation';
import s from './WeatherSearchPage.module.css';

const WeatherSearchPage = () => {
    return (
        <div className={s.wrap}>
            <SearchForm />
            <ButtonGetLocation />
        </div>
    );
};
export default WeatherSearchPage;
