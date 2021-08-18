import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import FavouritesScreen from "../screens/Favourites";
import ProfileScreen from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";
import Fab from "../components/Fab";

const Tab = createBottomTabNavigator();
const tabIcons = {
  Home: "ios-home-sharp",
  Favourites: "heart",
  Profile: "person",
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = tabIcons[route.name];

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle:{
              backgroundColor:"#B4F7CE"
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <Fab />
    </NavigationContainer>
  );
};

export default Routes;
