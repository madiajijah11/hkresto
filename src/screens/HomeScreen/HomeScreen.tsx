import { View } from "react-native";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Searches from "../../components/Search/Searches";
import React, { useState, useEffect } from "react";
import Restaurants from "../../components/Restaurants/Restaurants";
import useRestaurants from "../../hooks/useRestaurants";

export default function HomeScreen() {
  const [term, setTerm] = useState("");
  const [commonCategories] = useState([
    {
      name: "Burger",
      imageUrl: require("../../../assets/images/burger.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../../../assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../../../assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../../../assets/images/pizza.png"),
    },
    {
      name: "Smoothies",
      imageUrl: require("../../../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../../../assets/images/steak.png"),
    },
  ]);

  const [{ data, loading, error }, searchRestaurants] = useRestaurants(term);

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  return (
    <View>
      <Header upperText={"Hongkong"} lowerText={"Restaurant"} />
      <Searches setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />
      <Restaurants data={data} loading={loading} error={error} />
    </View>
  );
}
