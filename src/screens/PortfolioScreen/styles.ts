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
  balanceContainer: {
    marginVertical: 20,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#777777",
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default styles;
