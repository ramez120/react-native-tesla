import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";
export default function App() {
  return (
  
    <CarItem
      name="Model x"
      tagline="order from "
      subtag = "Tesla insdustries"
      image={require("./assets/images/ModelS.jpeg")}
    />
 

    )
  
  
}

const styles = StyleSheet.create({});
