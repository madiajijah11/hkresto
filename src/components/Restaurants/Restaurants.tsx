import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import RestaurantsItem from "./RestaurantsItem";

interface RestaurantsProps {
  data: any;
  loading: boolean;
  error: string;
}

const Restaurants = ({ data, loading, error }: RestaurantsProps) => {
  if (loading)
    return (
      <ActivityIndicator
        style={{
          marginVertical: 0,
        }}
        size="large"
      />
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantsItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        contentContainerStyle={{ paddingBottom: 25 }}
      />
    </View>
  );
};

export default Restaurants;
