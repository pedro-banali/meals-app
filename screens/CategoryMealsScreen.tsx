import React, { FC } from 'react';
import { NavigationParams } from 'react-navigation';
import { MealList } from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import { MealState } from '../store/reducer/meals';
import { Store } from 'redux';

const CategoryMealsScreen: FC<any> & NavigationParams = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const availableMeals = useSelector(({ meals }: { meals: MealState }) => {
    return Object.keys(meals.filteredMeals).map(
      mealId => meals.filteredMeals[mealId]
    );
  });
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryId.indexOf(catId) >= 0
  );
  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(value => value.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
