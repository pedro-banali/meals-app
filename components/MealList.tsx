import React, { FC } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Meal } from '../models/meal';
import { NavigationParams } from 'react-navigation';
import { MealItem } from './MealItem';

export const MealList: FC<{
  displayedMeals: Meal[];
  navigation: NavigationParams;
  style?: {};
}> = ({ style, displayedMeals, navigation }) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
        onSelectMeal={() =>
          navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: item.id }
          })
        }
      />
    );
  };
  return (
    <View style={{ ...styles.list, ...style }}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
