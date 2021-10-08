import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export interface PortfolioCoinProps {
  portfolioCoin: {
    image: string;
    name: string;
    symbol: string;
    amount: number;
    valueUSD: number;
  };
}

const PortfolioCoin = (porps: PortfolioCoinProps) => {
  //dis-structure
  const {
    portfolioCoin: { image, name, symbol, amount, valueUSD },
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
        <Text style={styles.amount}>
          {amount} {symbol}
        </Text>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
      </View>
    </View>
  );
};

export default PortfolioCoin;
