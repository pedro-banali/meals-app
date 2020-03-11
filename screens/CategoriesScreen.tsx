import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CustomHeaderButtons } from '../components/HeaderButton';
import { CategoryState } from '../store/reducer/categories';

const CategoriesScreen: FC<NavigationParams> & NavigationNavigatorProps = ({
  navigation
}) => {
  const categories = useSelector(
    ({ categories }: { categories: CategoryState }) => {
      // console.log(categories);
      return Object.values(categories.categories);
      // return Object.keys(categories.categories).map(categoryId => categories[categoryId]);
    }
  );

  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: item.id, title: item.title }
          });
        }}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={categories}
      keyExtractor={item => item.id}
      renderItem={itemData => renderGridItem(itemData)}
    />
  );
};

CategoriesScreen.navigationOptions = (navData: NavigationParams) => ({
  headerTitle: 'Meal Categories',
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
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
