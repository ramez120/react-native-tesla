import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
const StyledButton = (props) => {
  const { type, content, onPress } = props;
  const backgroundColor = type === "primary" ? "#171A20cc" : "#ffffffA6";
  const textColor = type === "primary" ? "#ffffffA6" : "#171A20cc";

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default StyledButton;
