import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    backgroundColor: "white",
  },
  topContainer: {
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
  image: {
    height: 80,
    width: 80,
    // borderRadius: 25,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  symbol: {
    color: "#777777",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  label: {
    color: "#545454",
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
  },
  valueContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
