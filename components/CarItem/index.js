import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";
const CarItem = (props) => {
  
  const { name, taglineCTA, image, tagline } = props.car;
  return (
 
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {" "} <Text style={styles.subtag}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          onPress={() => console.warn("hi from first")}
          content="Custom Order"
        />
        <StyledButton
          type="secondary"
          onPress={() => console.warn("hi from second")}
          content="Existing Inventory"
        />
      </View>
    </View>

  );
};
export default CarItem;
