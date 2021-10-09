import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PercentageChange from "../PercentageChange";
import styles from "./styles";

export interface PortfolioCoinProps {
  marketCoin: {
    image: string;
    name: string;
    symbol: string;
    valueChange24H: number;
    valueUSD: number;
  };
}

const MarketCoin = (porps: PortfolioCoinProps) => {
  //dis-structure
  const {
    marketCoin: { image, name, symbol, valueChange24H, valueUSD },
  } = porps;

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate("CoinDetails")}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
        <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;
