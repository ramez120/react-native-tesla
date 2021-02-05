import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItem";
const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item}  />}
        snapToAlignment = "start"
        decelerationRate = "normal"
        snapToInterval = {Dimensions.get('screen').height}
        showsVerticalScrollIndicator = {false}
      />
    </View>
  );
};
export default CarList;
