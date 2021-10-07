import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PegawaiView from "./pegawai/PegawaiView";
import PegawaiDetail from "./pegawai/PegawaiDetail";
import PegawaiEdit from "./pegawai/PegawaiEdit";

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
        <Stack.Screen
          name="PegawaiDetail"
          component={PegawaiDetail}
          options={{
            title: "Detail Data Pegawai",
            headerStyle: { backgroundColor: "#d34a22" },
          }}
        />
        <Stack.Screen
          name="PegawaiEdit"
          component={PegawaiEdit}
          options={{
            title: "Edit Data Pegawai",
            headerStyle: { backgroundColor: "#d34a22" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <MyStack />;
};

export default App;
