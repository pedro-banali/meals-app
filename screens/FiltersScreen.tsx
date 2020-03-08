import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationParams, NavigationNavigatorProps } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButtons } from '../components/HeaderButton';

const FiltersScreen: FC<NavigationParams> & NavigationNavigatorProps = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData: NavigationParams) => ({
  headerTitle: 'Filter Meals',
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen;
