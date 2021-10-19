import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: "1",
    name: "Emeksthecreator",
    email: "onukwubeizu@gmail.com",
    userImage:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    netWorth: 100000,
  });

  const { id, name, email, userImage, netWorth } = user;

  const navigation = useNavigation();

  const signOut = async () => {
    await Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      })
    );
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />

      <View>
        <View style={styles.userContainer}>
          <View style={styles.left}>
            <Image style={styles.userImage} source={{ uri: userImage }} />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.networth}>${netWorth}</Text>
          </View>
        </View>
      </View>
      <Pressable onPress={signOut} style={{ marginTop: "auto" }}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
