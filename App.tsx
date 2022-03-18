import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import Home from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
