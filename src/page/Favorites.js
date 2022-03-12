import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import Meetuplist from '../components/meetups/Meetuplist';

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>you got np favorites yet. Start adding some?</p>
    }else{
        content = <Meetuplist meetups={favoritesCtx.favorites}/>
    }


    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}
export default  Favorites;