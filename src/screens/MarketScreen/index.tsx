import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MarketCoin from "../../components/MarketCoin/index";
const image = require("../../../assets/images/market.png");

const marketCoins = [
  {
    id: "1",
    name: "Bitcoin",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BTC",
    valueChange24H: -0.02,
    valueUSD: 6942,
  },
  {
    id: "2",
    name: "Ethereum",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "ETH",
    valueChange24H: 1.12,
    valueUSD: 6942,
  },
  {
    id: "3",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    valueChange24H: -0.15,
    valueUSD: 6942,
  },
  {
    id: "4",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    valueChange24H: 3.15,
    valueUSD: 6942,
  },
  {
    id: "5",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    valueChange24H: 6.42,
    valueUSD: 6942,
  },
  {
    id: "6",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    valueChange24H: -1.42,
    valueUSD: 6942,
  },
  {
    id: "7",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    valueChange24H: 2.42,
    valueUSD: 6942,
  },
  {
    id: "8",
    name: "Smart Chain",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BNB",
    valueChange24H: -0.11,
    valueUSD: 6942,
  },
];

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={marketCoins}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View>
              <Text style={styles.title}>Market</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;
