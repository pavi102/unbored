import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReccomendationScreen from './screens/ReccomendationScreen';
import ReccomendationDetailsScreen from './screens/ReccomendationDetailsScreen';
import TellMeMoreScreen from './screens/TellMeMoreScreen'
import ActivityScreen from './screens/ActivityScreen'


const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Activity" component={ActivityScreen} />
				<Stack.Screen name="TellMeMore" component={TellMeMoreScreen} />
				<Stack.Screen name="Reccomendation" component={ReccomendationScreen} />
				<Stack.Screen name="ReccomendationDetails" component={ReccomendationDetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
