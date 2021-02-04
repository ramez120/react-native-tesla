import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from './styles';
const CarItem = (props) => {
  return (
    
         <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground source = {require("../../assets/images/ModelS.jpeg")} style = {styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $640,290</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
};
export default CarItem;
