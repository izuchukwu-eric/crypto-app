import React from "react";
import styles from "./styles";
import { View, Text, Image, Pressable } from "react-native";
const image = require("../../../assets/images/Saly-1.png");
const buttonImage = require("../../../assets/images/google-png.png");

const WelcomeScreen = () => {
  const signInGoogle = () => {};

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>Welcome To CoinBase</Text>
      <Text style={styles.subTitle}>
        Trade crypto P2P, connect with traders, share your thoughts
      </Text>
      <Pressable onPress={signInGoogle} style={styles.googleBtn}>
        <Image style={styles.buttonImage} source={buttonImage} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
