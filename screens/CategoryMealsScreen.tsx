import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen: FC<any> = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go to Meal Details!" onPress={() => {
          props.navigation.navigate({routeName: 'MealDetails'})
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
