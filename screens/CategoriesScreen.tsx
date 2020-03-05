import React, { FC } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  StackNavigationConfig,
  StackNavigationProp
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';

const CategoriesScreen: FC & StackNavigationProp & StackNavigationConfig = ({
  navigation
}) => {

  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: item.id }
          });
        }}
      />
    );
  };
  return (

      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={itemData => renderGridItem(itemData)}
      />
  );
};

CategoriesScreen.navigationOptions = () => ({
  headerTitle: 'Meal Categories'
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
