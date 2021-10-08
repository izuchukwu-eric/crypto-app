import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  symbol: {
    color: "#777777",
  },
  amount: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  valueUSD: {
    color: "#777777",
  },
});

export default styles;
