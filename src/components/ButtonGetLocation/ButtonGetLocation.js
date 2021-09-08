import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { weatherOperations } from 'redux/weather';
import { weatherSelectors } from 'redux/weather';
import s from './ButtonGetLocation.module.css';
import Button from '@material-ui/core/Button';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';

const ButtonGetLocation = () => {
    const [showCity, setShowCity] = useState(false);
    const location = useSelector(weatherSelectors.getLocation);
    const dispatch = useDispatch();

    const getCurrentCoordinates = async () => {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            lon: position.coords.longitude,
            lat: position.coords.latitude,
        };
    };

    const handleGetLocation = async () => {
        const coordinates = await getCurrentCoordinates();
        dispatch(weatherOperations.fetchCurrentLocation(coordinates));
        setTimeout(() => setShowCity(true), 500);
    };

    return (
        <>
            <RoomSharpIcon color="primary" style={{ fontSize: 60 }} />
            <Button
                type="button"
                onClick={handleGetLocation}
                variant="contained"
                size="large"
                color="primary"
                className={s.buttonGetLocation}
            >
                Отримати поточну локацію
            </Button>

            {location && showCity && (
                <Link to="/weather" className={s.buttonLink}>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={s.buttonLocation}
                    >
                        {location.city}
                    </Button>
                </Link>
            )}
        </>
    );
};
export default ButtonGetLocation;
