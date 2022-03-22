import { TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const SearchItem = ({ setTerm }: any) => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={28} color="black" />
      <TextInput
        style={styles.inputText}
        placeholder="Restaurant, food"
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={() => {
          if (input) setTerm(input);
          setInput("");
        }}
      />
    </View>
  );
};

export default SearchItem;
