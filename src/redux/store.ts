import { person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from './states/favorites';
import peopleSlice from './states/people';

export interface AppStore{
    people: person[];
    favorites: person[];
    
}

 export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice,
        favorites: favoritesSlice
    }
 })