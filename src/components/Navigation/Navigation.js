import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import TurnedInTwoToneIcon from '@material-ui/icons/TurnedInTwoTone';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink
                to="/"
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                <SearchIcon />
                Пошук
            </NavLink>
            <NavLink
                to="/weather"
                className={s.link}
                activeClassName={s.activeLink}
            >
                <WbSunnyTwoToneIcon />
                Погодні умови
            </NavLink>
            <NavLink
                to="/locations"
                className={s.link}
                activeClassName={s.activeLink}
            >
                <TurnedInTwoToneIcon />
                Збережені локації
            </NavLink>
        </nav>
    );
};
export default Navigation;
