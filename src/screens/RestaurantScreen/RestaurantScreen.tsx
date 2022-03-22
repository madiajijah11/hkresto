import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";
import { useRoute, useNavigation } from "@react-navigation/native";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [{ data, loading, error }, fetchRestaurant] = useRestaurantDetail();

  const id = route.params.id;
  // const id = "10540KOwjB55TfK26p51SQ";
  // console.log(route.params.id);

  useEffect(() => {
    fetchRestaurant(id);
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        style={{
          marginVertical: 30,
        }}
        size="large"
      />
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            // console.log({ item });
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
          showsVerticalScrollIndicator={false}
          overScrollMode={"never"}
        />
      )}
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.header}>
          Location: {data.location.display_address}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantScreen;
