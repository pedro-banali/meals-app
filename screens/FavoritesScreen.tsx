import React, { FC } from 'react';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { MealList } from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen: FC<{ navigation: NavigationParams }> &
  NavigationNavigatorProps = ({ navigation }) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList displayedMeals={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
};

export default FavoritesScreen;
