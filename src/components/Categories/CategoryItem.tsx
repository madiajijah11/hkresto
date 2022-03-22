import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const CategoryItem = ({ category, active, categoryPress }: any) => {
  return (
    <TouchableOpacity onPress={categoryPress}>
      <View
        style={[
          styles.container,
          active ? { backgroundColor: "gold" } : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={category.imageUrl} />
        </View>
        <Text style={styles.text}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
