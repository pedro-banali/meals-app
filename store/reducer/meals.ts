import { AnyAction } from 'redux';
import { Meal } from '../../models/meal';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meal.actions';
import { HASHED_MEALS } from './../../data/dummy-data';
import { HashMap } from './../HashMap';

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
        case SET_FILTERS:
            const appliedFilters = action.payload.filters;
            const { meals } = state;
            const filteredMeals = Object.keys(meals)
                .map(mealId => meals[mealId])
                .filter(meal => {
                    if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
                        return false;
                    }
                    if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
                        return false;
                    }
                    if (appliedFilters.isVegetarian && !meal.isVegetarian) {
                        return false;
                    }
                    if (appliedFilters.isVegan && !meal.isVegan) {
                        return false;
                    }
                    return true;
                })
                .reduce((previous, current) =>
                    ({ ...previous, [current.id]: current } as HashMap<Meal>), {} as HashMap<Meal>);
            return { ...state, filteredMeals };
        default:
            return state;
    }
};

export default mealsReducer;