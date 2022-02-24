import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import ToolBar from "../components/Home/ToolBar";

import React from "react";
import Search from "../Screen/SearchScreen";
import Wallet from "../Screen/WalletScreen";
import Category from "../Screen/CategoryScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <ToolBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Category" component={Category} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
