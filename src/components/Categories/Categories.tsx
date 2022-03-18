import { FlatList, View } from "react-native";
import React from "react";
import styles from "./styles";
import CategoriesItem from "./CategoryItem";

const Categories = ({ commonCategories, setTerm, term }) => {
  return (
    <View>
      <FlatList
        data={commonCategories}
        keyExtractor={(category) => category.name}
        renderItem={({ item }) => (
          <CategoriesItem
            category={item}
            active={term === item.name}
            categoryPress={() => setTerm(item.name)}
          />
        )}
        contentContainerStyle={styles.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
