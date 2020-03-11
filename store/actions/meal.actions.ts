import { HashMap } from './../HashMap';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (mealId: string) => ({
    type: TOGGLE_FAVORITE,
    payload: { mealId }
});

export const setFilters = (filterSettings: HashMap<boolean>) => ({
    type: SET_FILTERS,
    payload: { filters: filterSettings }
});