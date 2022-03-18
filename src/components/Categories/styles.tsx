import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categories: {
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: "gold",
    height: 90,
    width: 85,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 2,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
