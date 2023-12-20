import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ThreadScreen from './screens/ThreadScreen'
import { Ionicons } from '@expo/vector-icons';
import ActivityScreen from './screens/ActivityScreen'
import ProfileScreen from './screens/ProfileScreen'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name='Home'// this is first screen and this will be rendered by default when BoottomTabs function is passed in navigator screen section
                    component={HomeScreen}
                    options={
                        {
                            tabBarLabel: "Home",
                            tabBarLabelStyle: { color: "black" },
                            headerShown: false,
                            tabBarIcon: ({ focused }) =>// focused will crender icon according to focus
                                focused ? (
                                    <Entypo name="home" size={24} color="black" />
                                ) : (
                                    <AntDesign name="home" size={24} color="black" />
                                )
                        }}
                />
                <Tab.Screen name='Thread'
                    component={ThreadScreen}
                    options={
                        {
                            tabBarLabel: "Create",
                            tabBarLabelStyle: { color: "black" },
                            headerShown: false,
                            tabBarIcon: ({ focused }) =>// focused will crender icon according to focus
                                focused ? (
                                    <Ionicons name="create" size={24} color="black" />
                                ) : (
                                    <Ionicons name="create-outline" size={24} color="black" />
                                )
                        }}
                />
                <Tab.Screen name='Activity'
                    component={ActivityScreen}
                    options={
                        {
                            tabBarLabel: "Activitys",
                            tabBarLabelStyle: { color: "black" },
                            headerShown: false,
                            tabBarIcon: ({ focused }) =>// focused will crender icon according to focus
                                focused ? (
                                    <AntDesign name="heart" size={24} color="black" />
                                ) : (
                                    <AntDesign name="hearto" size={24} color="black" />
                                )
                        }}
                />
                <Tab.Screen name='Profile'
                    component={ProfileScreen}
                    options={
                        {
                            tabBarLabel: "Profile",
                            tabBarLabelStyle: { color: "black" },
                            headerShown: false,
                            tabBarIcon: ({ focused }) =>// focused will crender icon according to focus
                                focused ? (
                                    <Ionicons name="person" size={24} color="black" />
                                ) : (
                                    <Ionicons name="person-outline" size={24} color="black" />
                                )
                        }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})