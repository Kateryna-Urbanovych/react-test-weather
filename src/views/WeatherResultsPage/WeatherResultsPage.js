import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { weatherSelectors, weatherOperations } from 'redux/weather';
import WeatherCard from 'components/WeatherCard';
import NothingHere from '../../images/nothing-here.jpg';
import s from './WeatherResultsPage.module.css';
import { toast } from 'react-toastify';

const WeatherResultsPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useSelector(weatherSelectors.getLocation);
    const currentWeather = useSelector(weatherSelectors.getCurrentWeather);
    const dailyWeather = useSelector(weatherSelectors.getDailyWeather);
    const isRenderWeatherResults = location && currentWeather && dailyWeather;
    const searchError = useSelector(weatherSelectors.getSearchError);

    useEffect(() => {
        if (!location) {
            return;
        }
        const { coordinates } = location;
        dispatch(weatherOperations.fetchWeatherByCoordinates(coordinates));
    }, [location, dispatch]);

    useEffect(() => {
        if (searchError) {
            history.push('/');
            toast.error(`Погодні умови по даному запиту не знайдено`);
        }
    }, [searchError, history]);

    return (
        <div className={s.wrap}>
            {isRenderWeatherResults ? (
                <WeatherCard />
            ) : (
                <img src={NothingHere} alt="Nothing here" width="610" />
            )}
        </div>
    );
};
export default WeatherResultsPage;
