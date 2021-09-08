import { useSelector } from 'react-redux';
import { weatherSelectors } from 'redux/weather';
import moment from 'moment';
import 'servises/moment-api';
import s from './CurrentWeather.module.css';

const CurrentWeather = () => {
    const currentWeather = useSelector(weatherSelectors.getCurrentWeather);

    const { icon, description } = currentWeather.weather[0];
    const {
        dt,
        temp,
        feels_like,
        pressure,
        humidity,
        wind_speed,
        sunrise,
        sunset,
    } = currentWeather;

    return (
        <>
            <div className={s.wrap}>
                <h3>
                    {moment(moment.unix(dt)._d).format('dddd, DD MMMM gggg')}
                </h3>
                <div className={s.description}>
                    <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="Weather icon"
                        width="80"
                        height="80"
                    />
                    <span>{description}</span>
                </div>

                <ul className={s.list}>
                    <li>
                        Температура: <span>{temp.toFixed(1)} °С</span>
                    </li>
                    <li>
                        Відчувається як: <span>{feels_like.toFixed(1)} °С</span>
                    </li>
                    <li>
                        Тиск:{' '}
                        <span>
                            {((pressure * 100) / 133.322387415).toFixed(0)} мм
                        </span>
                    </li>
                    <li>
                        Вологість: <span>{humidity} %</span>
                    </li>
                    <li>
                        Швидкість вітру:{' '}
                        <span>{wind_speed.toFixed(1)} м/сек</span>
                    </li>
                    <li>
                        Час сходу сонця:{' '}
                        <span>
                            {moment(moment.unix(sunrise)._d).format('HH:mm')}
                        </span>
                    </li>
                    <li>
                        Час заходу сонця:{' '}
                        <span>
                            {moment(moment.unix(sunset)._d).format('HH:mm')}
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default CurrentWeather;
