import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexBasis: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 25,
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  backButton: {
    borderColor: "red",
    borderWidth: 2,
    width: "80%",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default styles;
