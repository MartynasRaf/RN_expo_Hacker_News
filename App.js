import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text, View } from 'react-native';
import NewScreen from './src/screens/NewScreen';
import TopScreen from './src/screens/TopScreen';
import AskScreen from './src/screens/AskScreen';
import ShowScreen from './src/screens/ShowScreen';
import TabScreen from './src/screens/TabScreen';

const newsFlow = createBottomTabNavigator({
	Top: TopScreen,
	News: NewScreen,
	Ask: AskScreen,
	Show: ShowScreen
});

newsFlow.navigationOptions = {
	headerShown: false,
	cardStyle: { backgroundColor: '#f5d2a4' }
};

//#f5d2a4

const navigator = createStackNavigator(
	{
		newsFlow,
		Tab: TabScreen
	},
	TopScreen
);

export default createAppContainer(navigator);
