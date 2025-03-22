import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScreen";
import StudentListScreen from "../views/StudentListScreen";
import StudentDetailScreen from "../views/StudentDetailScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
        <Stack.Screen name="StudentList" component={StudentListScreen} options={{ title: "Students List" }} />
        <Stack.Screen name="StudentDetail" component={StudentDetailScreen} options={{ title: "Student Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;