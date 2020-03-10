import { MEALS, HASHED_MEALS } from './../../data/dummy-data';
import { HashMap } from './../HashMap';
import { Meal } from '../../models/meal';
import { Action, AnyAction } from 'redux';
import { TOGGLE_FAVORITE } from '../actions/meal.actions';

export interface MealState {
    meals: HashMap<Meal>,
    filteredMeals: HashMap<Meal>,
    favoriteMeals: HashMap<Meal>;
}

const initialState: MealState = {
    meals: HASHED_MEALS,
    filteredMeals: HASHED_MEALS,
    favoriteMeals: {}
};

const mealsReducer = (state: MealState = initialState, action: AnyAction) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const { mealId } = action.payload;
            if (state.favoriteMeals[mealId]) {
                const { [mealId]: deleted, ...favoriteMeals
                } = state.favoriteMeals;
                return {
                    ...state, favoriteMeals
                };
            }
            return {
                ...state, favoriteMeals:
                {
                    ...state.favoriteMeals,
                    [action.payload.mealId]: state.meals[action.payload.mealId]
                }
            };
        default:
            return state;
    }
};

export default mealsReducer;