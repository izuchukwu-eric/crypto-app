import React from "react";
import { Text } from "react-native";

interface PercentageChangeProps {
  value: number;
  style?: object;
}

const PercentageChange = ({ value, style = {} }: PercentageChangeProps) => {
  return (
    <Text style={[style, { color: value > 0 ? "#3a960c" : "#FF0000" }]}>
      {value > 0 && "+"}
      {value}%
    </Text>
  );
};

export default PercentageChange;
