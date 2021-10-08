import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import UserRankingItem from "../../components/UserRankingItem";
const image = require("../../../assets/images/Saly-20.png");

const marketCoins = [
  {
    id: "1",
    name: "Bitcoin",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    netWorth: 6942,
  },
  {
    id: "2",
    name: "Ethereum",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    netWorth: 6942,
  },
  {
    id: "3",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    netWorth: 6942,
  },
  {
    id: "4",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    netWorth: 6942,
  },
  {
    id: "5",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    netWorth: 6942,
  },
];

const RankingsScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={marketCoins}
        renderItem={({ item, index }) => (
          <UserRankingItem user={item} place={index + 1} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View>{/* <Text style={styles.title}>Market</Text> */}</View>
          </>
        )}
      />
    </View>
  );
};

export default RankingsScreen;
