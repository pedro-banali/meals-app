import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CustomHeaderButtons } from '../components/HeaderButton';
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
