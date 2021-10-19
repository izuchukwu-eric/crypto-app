import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: "40%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#707070",
  },
  googleBtn: {
    marginTop: "auto",
    marginBottom: 50,
    width: "70%",
  },
  buttonImage: {
    width: "100%",
    resizeMode: "contain",
  },
});

export default styles;
