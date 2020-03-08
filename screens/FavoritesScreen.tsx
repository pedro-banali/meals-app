import React, { FC } from 'react';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { MealList } from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButtons } from '../components/HeaderButton';

const FavoritesScreen: FC<{ navigation: NavigationParams }> &
  NavigationNavigatorProps = ({ navigation }) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList displayedMeals={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = (navData: NavigationParams) => ({
  headerTitle: 'Your Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  )
});

export default FavoritesScreen;
