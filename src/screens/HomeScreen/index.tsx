import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
const image = require("../../../assets/images/Saly-1.png");

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>Welcome To CoinBase</Text>
      <Text style={styles.subTitle}>
        Trade crypto P2P, connect with traders, share your thoughts
      </Text>
    </View>
  );
};

export default HomeScreen;
