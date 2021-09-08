import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { weatherSelectors } from 'redux/weather';
import s from './ButtonSaveLocation.module.css';
import Button from '@material-ui/core/Button';
import TurnedInTwoToneIcon from '@material-ui/icons/TurnedInTwoTone';

const ButtonSaveLocation = () => {
    const location = useSelector(weatherSelectors.getLocation);
    const { city } = location;

    const handleSaveLocation = () => {
        if (
            !window.localStorage.getItem('savedLocations') ||
            JSON.parse(
                window.localStorage.getItem('savedLocations').length === 0,
            )
        ) {
            window.localStorage.setItem(
                'savedLocations',
                JSON.stringify([city]),
            );
        }
        const savedLocations = JSON.parse(
            window.localStorage.getItem('savedLocations'),
        );

        if (savedLocations.includes(city)) {
            return window.localStorage.setItem(
                'savedLocations',
                JSON.stringify(savedLocations),
            );
        } else {
            savedLocations.push(city);
            return window.localStorage.setItem(
                'savedLocations',
                JSON.stringify(savedLocations),
            );
        }
    };

    return (
        <Link to="/locations" className={s.buttonLink}>
            <Button
                type="button"
                variant="contained"
                color="primary"
                size="medium"
                className={s.button}
                onClick={handleSaveLocation}
            >
                <TurnedInTwoToneIcon style={{ fontSize: 30 }} />
                Зберегти локацію
            </Button>
        </Link>
    );
};
export default ButtonSaveLocation;
