import React, { FC } from 'react';
import { NavigationParams } from 'react-navigation';
import { MealList } from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen: FC<any> & NavigationParams = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryId.includes(catId));
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
