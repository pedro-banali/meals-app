import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen: FC<NavigationParams> & NavigationNavigatorProps = ({
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
