import { useSelector } from 'react-redux';
import { weatherSelectors } from 'redux/weather';
import moment from 'moment';
import 'servises/moment-api';
import s from './DailyWeather.module.css';

const DailyWeather = () => {
    const dailyWeather = useSelector(weatherSelectors.getDailyWeather);

    return (
        <div>
            <h2>Тижневий прогноз</h2>
            <ul className={s.dailylList}>
                {dailyWeather.map(day => {
                    const { icon, description } = day.weather[0];
                    const {
                        dt,
                        temp: {
                            day: dayTemp,
                            night: nightTemp,
                            max: maxTemp,
                            min: minTemp,
                        },
                        feels_like: { day: dayFeel, night: nightFeel },
                        pressure,
                        humidity,
                        wind_speed,
                        sunrise,
                        sunset,
                    } = day;

                    return (
                        <li key={dt} className={s.dailyItem}>
                            <div className={s.wrap}>
                                <h3>
                                    {moment(moment.unix(dt)._d).format(
                                        'dddd, DD MMMM gggg',
                                    )}
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

                                <ul>
                                    <li>
                                        Температура:
                                        <ul className={s.tempList}>
                                            <li>
                                                день{' '}
                                                <span>
                                                    {dayTemp.toFixed(1)} °С
                                                </span>{' '}
                                                | ніч{' '}
                                                <span>
                                                    {nightTemp.toFixed(1)} °С
                                                </span>
                                            </li>
                                            <li>
                                                макс.{' '}
                                                <span>
                                                    {maxTemp.toFixed(1)} °С
                                                </span>{' '}
                                                | мін.{' '}
                                                <span>
                                                    {minTemp.toFixed(1)} °С
                                                </span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Відчувається як:
                                        <ul className={s.tempList}>
                                            <li>
                                                день{' '}
                                                <span>
                                                    {dayFeel.toFixed(1)} °С
                                                </span>{' '}
                                                | ніч{' '}
                                                <span>
                                                    {nightFeel.toFixed(1)} °С
                                                </span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Тиск:{' '}
                                        <span>
                                            {(
                                                (pressure * 100) /
                                                133.322387415
                                            ).toFixed(0)}{' '}
                                            мм
                                        </span>
                                    </li>
                                    <li>
                                        Вологість: <span>{humidity} %</span>
                                    </li>
                                    <li>
                                        Швидкість вітру:{' '}
                                        <span>
                                            {wind_speed.toFixed(1)} м/сек
                                        </span>
                                    </li>
                                    <li>
                                        Час сходу сонця:{' '}
                                        <span>
                                            {moment(
                                                moment.unix(sunrise)._d,
                                            ).format('HH:mm')}
                                        </span>
                                    </li>
                                    <li>
                                        Час заходу сонця:{' '}
                                        <span>
                                            {moment(
                                                moment.unix(sunset)._d,
                                            ).format('HH:mm')}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default DailyWeather;
