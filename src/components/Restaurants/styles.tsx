import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flexBasis: "58%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  restaurantList: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 5,
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  star: {
    fontSize: 15,
  },
  price: {
    fontSize: 15,
  },
  phone: {
    fontSize: 15,
  },
  imageContainer: {
    borderRadius: 10,
    borderWidth: 3,
    height: 76,
    width: 76,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  containerRestaurants: {
    marginVertical: 10,
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default styles;
