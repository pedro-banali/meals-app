import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform, Text } from 'react-native';
import Colors from '../constants/Color';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavigationOptions = {
  headerTitle: 'A Screen',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
      // navigationOptions: {
      //  headerTitle: 'A something'
      // }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {}
    },
    MealDetail: MealDetailsScreen
  },
  { defaultNavigationOptions }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.accent
        }
      }
    },
    MealDetail: MealDetailsScreen
  },
  { defaultNavigationOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals'
        )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites !</Text>
        ) : (
          'Favorites'
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-bold'
          },
          activeTintColor: Colors.accent
        }
      });

const FiltersNavigators = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!'
    // },
    defaultNavigationOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: 'Meals' }
    },
    Filters: FiltersNavigators
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);
