import React, { FC } from 'react';
import { NavigationParams } from 'react-navigation';
import { useSelector } from 'react-redux';
import { MealList } from '../components/MealList';
import { MealState } from '../store/reducer/meals';
import { DefaultText } from '../components/DefaultText';
import { View, StyleSheet } from 'react-native';

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
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters? </DefaultText>
      </View>
    );
  }

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam('title');

  return {
    headerTitle: title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
