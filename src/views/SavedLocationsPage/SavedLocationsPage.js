import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { weatherOperations } from 'redux/weather';
import NothingHere from '../../images/nothing-here.jpg';
import s from './SavedLocationsPage.module.css';
import Button from '@material-ui/core/Button';
import PinDropSharpIcon from '@material-ui/icons/PinDropSharp';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

const SavedLocationsPage = () => {
    const [locations, setLocations] = useState(
        JSON.parse(window.localStorage.getItem('savedLocations')),
    );
    const dispatch = useDispatch();

    const isRenderNothing = !locations || locations.length === 0;

    const handleDeleteLocation = city => {
        const filteredLocations = locations.filter(
            location => location !== city,
        );
        setLocations(filteredLocations);
        window.localStorage.setItem(
            'savedLocations',
            JSON.stringify(filteredLocations),
        );
    };

    return (
        <div className={s.wrap}>
            {isRenderNothing ? (
                <img src={NothingHere} alt="Nothing here" width="610" />
            ) : (
                <ul className={s.list}>
                    {locations.sort().map(city => (
                        <li key={city} className={s.listItem}>
                            <PinDropSharpIcon
                                color="primary"
                                style={{ fontSize: 30 }}
                                className={s.icon}
                            />
                            <Button
                                variant="outlined"
                                color="primary"
                                className={s.buttonLocation}
                                onClick={() =>
                                    dispatch(
                                        weatherOperations.fetchWeatherByName(
                                            city,
                                        ),
                                    )
                                }
                            >
                                <Link to="/weather" className={s.buttonLink}>
                                    {city}
                                </Link>
                            </Button>
                            <BackspaceOutlinedIcon
                                color="action"
                                style={{ fontSize: 30, color: '#cd6155' }}
                                className={s.iconDelete}
                                onClick={() => handleDeleteLocation(city)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default SavedLocationsPage;
