import { useContext } from 'react';
import {Link} from 'react-router-dom';

import classes from './MainNavaigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Some Link</Link>
                </li>
                <li>
                    <Link to="/NewMeetup">NewMeetup</Link>
                </li>
                <li>
                    <Link to="/favorites">
                        favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Register">
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation