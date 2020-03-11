import React, { FC, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationNavigatorProps, NavigationParams } from 'react-navigation';
import { CustomHeaderButtons } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ScrollView } from 'react-native-gesture-handler';
import { DefaultText } from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { MealState } from '../store/reducer/meals';
import { toggleFavorite } from '../store/actions/meal.actions';

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
  const selectedMeal = useSelector(
    ({ meals }: { meals: MealState }) => meals.meals[mealId]
  );

  const isCurrentMealFavorite = useSelector(
    ({ meals }: { meals: MealState }) => meals.favoriteMeals[mealId]
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: isCurrentMealFavorite });
  }, [isCurrentMealFavorite]);
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>

        {selectedMeal.ingredients.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step, index) => (
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
  const mealTitle = navigation.getParam('mealTitle');
  const toggleFavorite = navigation.getParam('toggleFav');
  const isFavorite = navigation.getParam('isFav');
  // const displayedMeal = mealTitle);
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title='favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
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
