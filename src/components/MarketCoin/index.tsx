import React from "react";
import { View, Text, Image } from "react-native";
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
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
        <Text style={{ color: valueChange24H > 0 ? "#3a960c" : "#FF0000" }}>
          {valueChange24H > 0 && "+"}
          {valueChange24H}
        </Text>
      </View>
    </View>
  );
};

export default MarketCoin;
