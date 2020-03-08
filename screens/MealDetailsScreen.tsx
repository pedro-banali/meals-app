import React, { FC } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { MEALS } from '../data/dummy-data';
import { CustomHeaderButtons } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ScrollView } from 'react-native-gesture-handler';
import { DefaultText } from '../components/DefaultText';

const ListItem: FC = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen: FC<NavigationParams> & NavigationNavigatorProps = ({
  navigation
}) => {
  const mealId = navigation.getParam('mealId');
  const displayedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: displayedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <DefaultText>{displayedMeal.duration}m</DefaultText>
          <DefaultText>{displayedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{displayedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>

        {displayedMeal.ingredients.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {displayedMeal.steps.map((step, index) => (
          <ListItem key={index}>
            {index + 1} ) {step}
          </ListItem>
        ))}
      </View>
      <Button
        title='Goo Back to Categories'
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </ScrollView>
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
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
