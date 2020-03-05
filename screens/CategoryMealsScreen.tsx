import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  StackNavigationProp,
  StackNavigationConfig
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import { setPlaneDetection } from 'expo/build/AR';
import { Meal } from '../models/meal';
import { MealItem } from '../components/MealItem';

const CategoryMealsScreen: FC<any> &
  StackNavigationProp &
  StackNavigationConfig = ({ props, navigation }) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
        onSelectMeal={() => {}}
      />
    );
  };

  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryId.includes(catId));
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(value => value.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
