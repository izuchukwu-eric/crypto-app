import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PercentageChange from "../../components/PercentageChange";

const CoinDetailScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    name: "Bitcoin",
    image:
      "https://images.unsplash.com/photo-1625806335347-569c6ba84d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    symbol: "BTC",
    valueChange24H: -0.11,
    valueChange1D: 2.11,
    valueChange7D: -0.11,
    currentPrice: 6942,
    amount: 2,
  });

  const {
    name,
    image,
    symbol,
    amount,
    valueChange24H,
    valueChange1D,
    valueChange7D,
    currentPrice,
  } = coinData;

  const onBuy = () => {};

  const onSell = () => {};

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: image }} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign name="staro" size={30} color={"#2f95dc"} />
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Current Price</Text>
          <Text style={styles.value}>{currentPrice}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <PercentageChange value={valueChange24H} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <PercentageChange value={valueChange1D} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={valueChange7D} />
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {symbol} {amount} ($ {currentPrice * amount})
        </Text>
      </View>

      <View style={[styles.row, { marginTop: "auto" }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#24850f" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "#d60000" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
