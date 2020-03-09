import { MEALS, HASHED_MEALS } from './../../data/dummy-data';
import { HashMap } from './../HashMap';
import { Meal } from '../../models/meal';
import { Action } from 'redux';

interface MealState {
    meals: HashMap<Meal>,
    filteredMeals: HashMap<Meal>,
    favoriteMeals: HashMap<Meal>;
}

const initialState: MealState = {
    meals: HASHED_MEALS,
    filteredMeals: HASHED_MEALS,
    favoriteMeals: {}
};

const mealsReducer = (state: MealState = initialState, action: Action) => {
    return state;
};

export default mealsReducer;