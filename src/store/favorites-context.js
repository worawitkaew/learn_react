import { createContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites] = useState([]);

    function addFavoritesHandler(favoritesMeetup){
        // เหมือนใช้อันนี้ 
        // return userFavorites.concat(favoritesMeetup);
        // แต่แค่ได้อะไรบ้างอย่างที่ถูกต้องมากขึ้น
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritesMeetup);
        });
    }
    function removeFavoritesHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }
    function itemFavoritesHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemFavoritesHandler,
    };

    return (
    <FavoritesContext.Provider value={context}>
    {props.children}
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;