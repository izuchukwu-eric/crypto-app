import React, { useEffect } from "react";
import styles from "./styles";
import { View, Text, Image, Pressable } from "react-native";
import { Auth, Hub } from "aws-amplify";
import { useNavigation, CommonActions } from "@react-navigation/native";
const image = require("../../../assets/images/Saly-1.png");
const buttonImage = require("../../../assets/images/google-png.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  //fetch user
  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        console.log("user data");
        console.log(user);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Root" }],
          })
        );
      }
    };

    fetchUser();
  }, []);

  //listen to know if user is signed in
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Root" }],
          })
        );
      }
    });
  }, []);

  const signInGoogle = async () => {
    await Auth.federatedSignIn({ provider: "Google" });
  };

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
