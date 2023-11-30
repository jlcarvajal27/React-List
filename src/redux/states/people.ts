// 
import { localStorageTypes, person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage('PEOPLE') 
    ? JSON.parse(getLocalStorage('PEOPLE') as string) 
    : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(localStorageTypes.PEOPLE, state)
            return action.payload;
        }
    }
})

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;