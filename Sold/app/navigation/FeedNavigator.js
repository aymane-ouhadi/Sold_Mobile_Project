import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import ListingsScreen from "../screens/ListingsScreen"
import ListingsDetailsScreen from "../screens/ListingDetailsScreen"

const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Listings" component={ListingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ListingDetails" component={ListingsDetailsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default FeedNavigator