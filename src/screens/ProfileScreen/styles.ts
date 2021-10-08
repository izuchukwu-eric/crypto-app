import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
    width: "100%",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 80,
    width: 80,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {},
  networth: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
