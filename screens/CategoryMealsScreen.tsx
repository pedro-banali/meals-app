import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  StackNavigationProp,
  StackNavigationConfig
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen: FC<any> &
  StackNavigationProp &
  StackNavigationConfig = ({ props, navigation }) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(value => value.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title='Go to Meal Details!'
        onPress={() => {
          navigation.navigate({ routeName: 'MealDetails' });
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(value => value.id === catId);

  return {
    headerTitle: selectedCategory.title,
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
