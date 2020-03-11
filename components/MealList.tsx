import React, { FC } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Meal } from '../models/meal';
import { NavigationParams } from 'react-navigation';
import { MealItem } from './MealItem';
import { useSelector } from 'react-redux';
import { MealState } from '../store/reducer/meals';

export const MealList: FC<{
  displayedMeals: Meal[];
  navigation: NavigationParams;
  style?: {};
}> = ({ style, displayedMeals, navigation }) => {
  const { favoriteMeals } = useSelector(
    ({ meals }: { meals: MealState }) => meals
  );
  const renderMealItem = ({ item }: { item: Meal }) => {
    const isFavorite = !!favoriteMeals[item.id];
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
            params: {
              mealId: item.id,
              mealTitle: item.title,
              isFav: isFavorite
            }
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
