import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
        <Text style={styles.amount}>
          {amount} {symbol}
        </Text>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;
