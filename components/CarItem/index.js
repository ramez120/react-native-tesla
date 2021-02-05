import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import StyledButton from "../StyledButton";
import styles from "./styles";
const CarItem = (props) => {
    const {name,tagline,image, subtag} = props;
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}
          {" "}
          <Text style = {styles.subtag}>{subtag}</Text>
          </Text>
        </View>
        <View style = {styles.buttonContainer}>
        <StyledButton
          type="primary"
          onPress={() => console.warn("hi from first")}
          content = "Custom Order"
        />
        <StyledButton
          type="secondary"
          onPress={() => console.warn("hi from second")}
          content = "Existing Inventory"

        />
        </View>
      </View>
    </View>
  );
};
export default CarItem;
