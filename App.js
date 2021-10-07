import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PegawaiView from "./pegawai/PegawaiView";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PegawaiView">
        <Stack.Screen
          name="PegawaiView"
          component={PegawaiView}
          options={{
            title: "Lihat Data Pegawai",
            headerStyle: { backgroundColor: "#d34a22" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <View>
      <MyStack />
    </View>
  );
};

export default App;
