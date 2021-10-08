import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export interface UserRankingProps {
  user: {
    image: string;
    name: string;
    netWorth: number;
  };
  place: number;
}

const UserRankingItem = (porps: UserRankingProps) => {
  //dis-structure
  const {
    user: { image, name, netWorth },
    place,
  } = porps;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.networth}>${netWorth}</Text>
      </View>
    </View>
  );
};

export default UserRankingItem;
