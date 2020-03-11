import { HASHED_CATEGORIES } from './../../data/dummy-data';
import { Category } from '../../models/category';
import { HashMap } from '../HashMap';
import { AnyAction } from 'redux';

export interface CategoryState {
    categories: HashMap<Category>;
}

const initialState: CategoryState = {
    categories: HASHED_CATEGORIES
};

const categoryReducer = (state: CategoryState = initialState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default categoryReducer;