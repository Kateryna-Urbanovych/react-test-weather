import { useSelector } from 'react-redux';
import { weatherSelectors } from 'redux/weather';
import ButtonSaveLocation from 'components/ButtonSaveLocation';
import CurrentWeather from 'components/CurrentWeather';
import DailyWeather from 'components/DailyWeather';
import Loader from 'components/Loader';
import s from './WeatherCard.module.css';

const WeatherCard = () => {
    const location = useSelector(weatherSelectors.getLocation);
    const currentWeather = useSelector(weatherSelectors.getCurrentWeather);
    const dailyWeather = useSelector(weatherSelectors.getDailyWeather);
    const isRenderWeatherCard = location && currentWeather && dailyWeather;
    const { city, country } = location;

    return (
        <>
            {!isRenderWeatherCard ? (
                <Loader />
            ) : (
                <>
                    <div className={s.top}>
                        <h1 className={s.cityName}>
                            {city}, {country}
                        </h1>
                        <ButtonSaveLocation />
                    </div>

                    <CurrentWeather />
                    <DailyWeather />
                </>
            )}
        </>
    );
};
export default WeatherCard;
