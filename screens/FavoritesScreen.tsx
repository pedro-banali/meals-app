import React, { FC } from 'react';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { MealList } from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButtons } from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import { MealState } from '../store/reducer/meals';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultText } from '../components/DefaultText';

const FavoritesScreen: FC<{ navigation: NavigationParams }> &
  NavigationNavigatorProps = ({ navigation }) => {
  const availableMeals = useSelector(({ meals }: { meals: MealState }) =>
    Object.values(meals.favoriteMeals)
  );
  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorites meals found. Start adding some</DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
