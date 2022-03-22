import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";

export default function Header({ upperText, lowerText }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title0}>{upperText}</Text>
      <Text style={styles.title1}>{lowerText}</Text>
    </View>
  );
}
