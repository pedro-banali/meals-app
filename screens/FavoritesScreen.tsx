import React, { FC } from 'react';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { MealList } from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButtons } from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import { MealState } from '../store/reducer/meals';

const FavoritesScreen: FC<{ navigation: NavigationParams }> &
  NavigationNavigatorProps = ({ navigation }) => {
  const availableMeals = useSelector(({ meals }: { meals: MealState }) =>
    Object.values(meals.favoriteMeals)
  );
  return <MealList displayedMeals={availableMeals} navigation={navigation} />;
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
