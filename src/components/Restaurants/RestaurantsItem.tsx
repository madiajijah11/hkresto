import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function RestaurantsItem({ restaurant }: any) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}
    >
      {/* {console.log(restaurant.id)} */}
      <View style={styles.restaurantList}>
        <Image style={styles.image} source={{ uri: restaurant.image_url }} />
        <View style={styles.containerRestaurants}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.star}>
              Stars: {restaurant.rating}{" "}
              <AntDesign name="star" size={16} color="gold" />{" "}
              {restaurant.review_count} Reviews
            </Text>
            <Text style={styles.price}>Budget: {restaurant.price}</Text>
            <Text style={styles.phone}>Phone: {restaurant.phone}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantsItem;
