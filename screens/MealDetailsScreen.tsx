import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { MEALS } from '../data/dummy-data';
import { CustomHeaderButtons } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const MealDetailsScreen: FC<NavigationParams> & NavigationNavigatorProps = ({
  navigation,
  navigationOptions
}) => {
  const mealId = navigation.getParam('mealId');
  const displayedMeal = MEALS.find(meal => meal.id === mealId);
  navigationOptions = { headerTitle: 'buceta' };
  return (
    <View style={styles.screen}>
      {displayedMeal.ingredients.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      <Button
        title='Goo Back to Categories'
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const displayedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: displayedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title='favorite'
          iconName='ios-star'
          onPress={() => {
            console.log('add as favorite');
          }}
        />
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
