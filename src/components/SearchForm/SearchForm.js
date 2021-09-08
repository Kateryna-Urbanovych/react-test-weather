import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { weatherOperations } from 'redux/weather';
import s from './SearchForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import LocationCitySharpIcon from '@material-ui/icons/LocationCitySharp';
import { toast } from 'react-toastify';

const SearchForm = () => {
    const [cityQuery, setCityQuery] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCityQueryChange = event => {
        setCityQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (cityQuery.trim() === '') {
            toast.warning('Будь-ласка, введіть назву міста');
            return;
        }

        dispatch(weatherOperations.fetchWeatherByName(cityQuery));
        setCityQuery('');
        setTimeout(() => history.push('/weather'), 500);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={s.form}>
                <LocationCitySharpIcon
                    color="primary"
                    style={{ fontSize: 60 }}
                />
                <TextField
                    className={s.input}
                    color="primary"
                    id="outlined-basic"
                    label="Введіть назву міста"
                    variant="outlined"
                    type="text"
                    autoComplete="off"
                    value={cityQuery}
                    onChange={handleCityQueryChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={s.button}
                >
                    <SearchSharpIcon style={{ fontSize: 30 }} />
                    Пошук
                </Button>
            </form>
        </>
    );
};
export default SearchForm;
