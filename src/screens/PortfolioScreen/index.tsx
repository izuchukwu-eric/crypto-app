import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoin";
const image = require("../../../assets/images/Saly-10.png");

const portfolioCoins = [
  {
    id: "1",
    name: "Bitcoin",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "USD",
    amount: 6942,
    valueUSD: 69.42,
  },
  {
    id: "2",
    name: "Ethereum",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "ETH",
    amount: 112,
    valueUSD: 69.42,
  },
  {
    id: "3",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    amount: 6942,
    valueUSD: 69.42,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.title}>Profolio balance</Text>
        <Text style={styles.amount}>$69.420</Text>
      </View>

      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
