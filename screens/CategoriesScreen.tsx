import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationConfig, StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen: FC & StackNavigationProp & StackNavigationConfig = ({
  navigation
}) => {
  // navigationOptions.navigationOptions = {
  //   headerTitle: 'Meal Categories',
  //   headerStyle: {
  //     backgroundColor: Colors.primary
  //   },
  //   headerTintColor: 'white'
  // };
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: item.id }
          })
        }
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerTitle: 'Meal Categories',
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
