import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import AdvancedSearchScreen from '../screens/AdvandcedSearch';
import FavScreen from '../screens/FavScreen';
import MissionsScreen from '../screens/MissionsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AdvancedSearchStack = createStackNavigator({
    AdvancedSearch: AdvancedSearchScreen,
});

AdvancedSearchStack.navigationOptions = {
    tabBarLabel: 'Advanced Search',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-search${focused ? '' : '-outline'}`
                    : 'md-search'
            }
        />
    ),
};


const FavStack = createStackNavigator({
    Fav: FavScreen,
});

FavStack.navigationOptions = {
    tabBarLabel: 'Favorites',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-heart'
            }
        />
    ),
};

const MissionsStack = createStackNavigator({
    Missions: MissionsScreen,
});

MissionsStack.navigationOptions = {
    tabBarLabel: 'Missions',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-ribbon${focused ? '' : '-outline'}`
                    : 'md-ribbon'
            }
        />
    ),
};

const MessagesStack = createStackNavigator({
    Messages: MessagesScreen,
});

MessagesStack.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-mail${focused ? '' : '-outline'}`
                    : 'md-mail'
            }
        />
    ),
};

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-person${focused ? '' : '-outline'}`
                    : 'md-person'
            }
        />
    ),
};

export default createBottomTabNavigator({
    AdvancedSearchStack,
    FavStack,
    MissionsStack,
    MessagesStack,
    ProfileStack,
});
