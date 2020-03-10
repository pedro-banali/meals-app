export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (mealId: string) => ({
    type: TOGGLE_FAVORITE,
    payload: { mealId }
});